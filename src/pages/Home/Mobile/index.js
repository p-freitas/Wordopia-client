import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'
import timeSound from '../../../assets/timeSound.mp3'
import timeSoundStop from '../../../assets/darkcloudio.mp3'
import playerTurnSound from '../../../assets/playerTurnSound.mp3'
import ModalPlayerName from '../../../components/ModalPlayerName'
import PlayersList from '../../../components/PlayersList'
import WinnerModal from '../../../components/WinnerModal'
import MuteButton from '../../../components/MuteButton'
import ModalReset from '../../../components/ModalReset'
import ModalRemovePlayer from '../../../components/ModalRemovePlayer'
import * as S from './style'

const socket = io(process.env.REACT_APP_SOCKET_URL, {
  transports: ['websocket'],
})

const HomeMobile = () => {
  const [timer, setTimer] = useState()
  const [activeLetter, setActiveLetter] = useState(null) // state to keep track of the active letter
  const [textLost, setTextLost] = useState(false)
  const [playerModalOpen, setPlayerModalOpen] = useState(false)
  const [WinnerModalOpen, setWinnerModalOpen] = useState(false)
  const [playerName, setPlayerName] = useState('')
  const [currentTurn, setCurrentTurn] = useState('')
  const [players, setPlayers] = useState([])
  const [playersOut, setPlayersOut] = useState()
  const [currentLetter, setCurrentLetter] = useState()
  const [Winner, setWinner] = useState()
  const [isMuted, setIsMuted] = useState(false)
  const [currentWord, setCurrentWord] = useState()
  const [ResetOpenModal, setResetOpenModal] = useState()
  const [RemovePlayerOpenModal, setRemovePlayerOpenModal] = useState()
  const [paused, setPaused] = useState(false)

  const audioRef = useRef(null)
  const audioStopRef = useRef(null)
  const audioPlayerTurnSoundRef = useRef(null)

  const letters = [...Array(26)].map((_, index) =>
    String.fromCharCode(65 + index)
  )
  const excludedLetters = new Set(['X', 'Y', 'Ç', 'K', 'Q', 'W'])
  const filteredLetters = letters.filter(letter => !excludedLetters.has(letter))

  useEffect(() => {
    try {
      socket.emit('getAll')

      socket.on('sendAll', data => {
        setActiveLetter(data)
      })
    } catch (error) {
      console.log(error)
    }

    try {
      socket.emit('getWord')

      socket.on('sendWord', data => {
        setCurrentWord(data)
      })
    } catch (error) {
      console.log(error)
    }

    setPlayerModalOpen(true)
  }, [])

  useEffect(() => {
    socket.on('turn', data => {
      setCurrentTurn(data)
      audioPlayerTurnSoundRef.current.play()
    })
  }, [])

  socket.on('playersOut', data => {
    setPlayersOut(data)
  })

  useEffect(() => {
    socket.on('timerFinished', () => {
      if (audioStopRef.current && audioRef.current) {
        audioRef.current.pause()
        audioStopRef.current.play()
      }
      setTextLost(true)
    })
  }, [])

  useEffect(() => {
    setInterval(() => {
      setTextLost(false)
    }, 5000)
  }, [])

  useEffect(() => {
    socket.on('gameAllReseted', () => {
      localStorage.removeItem('playerName')
    })
  }, [])

  socket.on('timer', time => {
    setTimer(time)
  })

  socket.on('lettersArray', data => {
    setActiveLetter(data)
  })

  socket.on('currentLetter', currentLetter => {
    setCurrentLetter(currentLetter)
  })

  socket.on('wordGenerated', data => {
    setCurrentWord(data)
  })

  socket.on('winner', winner => {
    setWinnerModalOpen(true)
    setWinner(winner)
  })

  socket.on('gameReseted', () => {
    setWinnerModalOpen(false)
  })

  socket.on('gameAllReseted', () => {
    localStorage.removeItem('playerName')
  })

  const handleClick = letter => {
    if (!activeLetter?.includes(letter)) {
      setActiveLetter(letter)
      socket.emit('letter', letter) // emit the letter to the server
    }
  }

  const handlePlayerNameChange = event => {
    if (event.target.value.length <= 12) {
      setPlayerName(event.target.value)
    }
  }

  const handlePlayerNameSubmit = () => {
    localStorage.setItem('playerName', playerName)
    socket.emit('playerName', playerName)
    setPlayerName('')
    setPlayerModalOpen(false)
  }

  const handleClickWordButton = () => {
    socket.emit('wordsButtonClick')
    socket.emit('getWord')
  }

  const handleStartTimer = () => {
    if (!timer) {
      socket.emit('startTimer')
      if (audioRef.current) {
        audioRef.current.play()
      }
    } else {
      socket.emit('resetTimer')
      socket.emit('cleanCurrentLetter')

      if (activeLetter.length === filteredLetters.length) {
        handleResetActiveLetters()
      }
    }

    socket.emit('changeTurnPlayer')
  }

  const handleRemovePlayerClick = () => {
    setRemovePlayerOpenModal(true)
  }

  const handleResetActiveLetters = () => {
    socket.emit('resetActiveLetters')
    audioRef.current.pause()
  }

  const handleResetGame = () => {
    socket.emit('resetGame')
    audioRef.current.pause()
    setWinnerModalOpen(false)
  }

  const handleResetClick = () => {
    setResetOpenModal(true)
  }

  const handleResetAllGame = () => {
    socket.emit('resetGameAll')
    setResetOpenModal(false)
  }

  const handlePause = () => {
    setPaused(!paused) // toggle the paused state

    // Emit a pauseTimer event to the server
    socket.emit('pauseTimer', timer)
  }

  return (
    <S.PageContainer>
      <S.TabletopContainer>
        <S.Title>Trava Letras</S.Title>
        <audio ref={audioRef} src={timeSound} muted={isMuted} />
        <audio ref={audioStopRef} src={timeSoundStop} muted={isMuted} />
        <audio
          ref={audioPlayerTurnSoundRef}
          src={playerTurnSound}
          muted={isMuted}
        />
        {textLost && <S.TextLost>Se Fodeu</S.TextLost>}
        <S.WordButtonContainer>
          <S.Word>{currentWord}</S.Word>
          <S.WordButton onClick={() => handleClickWordButton()}>
            Gerar novo tema
          </S.WordButton>
        </S.WordButtonContainer>
        <PlayersList
          currentTurn={currentTurn}
          playersOut={playersOut}
          setPlayersOut={setPlayersOut}
          currentLetter={currentLetter}
          players={players}
          setPlayers={setPlayers}
        />
        <S.RemovePlayerButton onClick={() => handleRemovePlayerClick()}>
          Eliminar jogador
        </S.RemovePlayerButton>
        <S.TimerText>{timer}</S.TimerText>
        <S.ButtonContainer>
          <S.Button onClick={handleStartTimer} />
        </S.ButtonContainer>
        <S.PauseButton onClick={handlePause}>
          {paused ? 'Continuar' : 'Pausar'}
        </S.PauseButton>
        <S.AlphabetContainer>
          {filteredLetters.map(letter => (
            <S.Letter
              background={activeLetter?.includes(letter) ? 'red' : 'unset'}
              backgroundHover={
                activeLetter?.includes(letter) ? '#bb0505' : 'rgb(57, 167, 255)'
              }
              key={letter}
              onClick={() => handleClick(letter)}
              isActive={activeLetter === letter}
              cursor={activeLetter?.includes(letter)}
            >
              {letter}
            </S.Letter>
          ))}
        </S.AlphabetContainer>

        {localStorage.getItem('playerName') === null && (
          <ModalPlayerName
            handlePlayerNameSubmit={handlePlayerNameSubmit}
            handlePlayerNameChange={handlePlayerNameChange}
            playerName={playerName}
            open={playerModalOpen}
            setOpen={setPlayerModalOpen}
          />
        )}
        <S.ResetButton onClick={() => handleResetClick()}>
          Resetar
        </S.ResetButton>
      </S.TabletopContainer>

      <WinnerModal
        open={WinnerModalOpen}
        setOpen={setWinnerModalOpen}
        winner={Winner}
        handleResetGame={handleResetGame}
      />
      <MuteButton setIsMuted={setIsMuted} isMuted={isMuted} />
      <ModalReset
        handleResetAllGame={handleResetAllGame}
        open={ResetOpenModal}
        setOpen={setResetOpenModal}
      />
      <ModalRemovePlayer
        open={RemovePlayerOpenModal}
        setOpen={setRemovePlayerOpenModal}
        players={players}
        socket={socket}
      />
    </S.PageContainer>
  )
}

export default HomeMobile
