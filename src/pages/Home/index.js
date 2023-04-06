import React, { useState, useEffect, useRef } from 'react'
import timeSound from '../../assets/timeSound.mp3'
import timeSoundStop from '../../assets/darkcloudio.mp3'
import playerTurnSound from '../../assets/playerTurnSound.mp3'
import * as S from './style'

import io from 'socket.io-client'
import ModalPlayerName from '../../components/ModalPlayerName'
import PlayersList from '../../components/PlayersList'
import WinnerModal from '../../components/WinnerModal'

const socket = io(process.env.REACT_APP_SOCKET_URL, {
  transports: ['websocket'],
})

socket.on('connect', () => console.log('[SOCKET] [DISPLAY] => New Connection'))

const Home = () => {
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
  const [isMyTurn, setIsMyTurn] = useState(false)
  const audioRef = useRef(null)
  const audioStopRef = useRef(null)
  const audioPlayerTurnSoundRef = useRef(null)

  const letters = [...Array(26)].map((_, index) =>
    String.fromCharCode(65 + index)
  )
  const excludedLetters = new Set(['X', 'Y', 'Ç', 'K', 'Q', 'W'])
  const filteredLetters = letters.filter(letter => !excludedLetters.has(letter))

  const handleClick = letter => {
    if (!activeLetter.includes(letter)) {
      setActiveLetter(letter)
      socket.emit('letter', letter) // emit the letter to the server
    }
  }

  const handlePlayerNameChange = event => {
    if (event.target.value.length <= 12) {
      setPlayerName(event.target.value)
    }
  }

  const handlePlayerNameSubmit = event => {
    // event.preventDefault()
    socket.emit('playerName', playerName)
    setPlayerName('')
    setPlayerModalOpen(false)
  }

  useEffect(() => {
    try {
      socket.emit('getAll')

      socket.on('sendAll', data => {
        setActiveLetter(data)
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
      // setIsMyTurn(data === playerName)
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

  socket.on('timer', time => {
    setTimer(time)
  })

  socket.on('lettersArray', data => {
    setActiveLetter(data)
  })

  socket.on('currentLetter', currentLetter => {
    setCurrentLetter(currentLetter)
  })

  socket.on('winner', winner => {
    setWinnerModalOpen(true)
    setWinner(winner)
  })

  socket.on('gameReseted', winner => {
    setWinnerModalOpen(false)
  })

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

  const handleResetActiveLetters = () => {
    socket.emit('resetActiveLetters')
    audioRef.current.pause()
  }

  const handleResetGame = () => {
    socket.emit('resetGame')
    audioRef.current.pause()
    setWinnerModalOpen(false)
  }



  return (
    <S.PageContainer>
      <S.TabletopContainer>
        <S.Title>Trava Letras</S.Title>
        {/* <S.ResetButton onClick={handleResetActiveLetters}>
          Resetar
        </S.ResetButton> */}
        <audio ref={audioRef} src={timeSound} />
        <audio ref={audioStopRef} src={timeSoundStop} />
        <audio ref={audioPlayerTurnSoundRef} src={playerTurnSound} />
        {textLost && <S.TextLost>Se Fodeu</S.TextLost>}
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
        <S.TimerText>{timer}</S.TimerText>
        <S.ButtonContainer>
          <S.Button onClick={handleStartTimer} />
        </S.ButtonContainer>

        <ModalPlayerName
          handlePlayerNameSubmit={handlePlayerNameSubmit}
          handlePlayerNameChange={handlePlayerNameChange}
          playerName={playerName}
          open={playerModalOpen}
          setOpen={setPlayerModalOpen}
        />
      </S.TabletopContainer>
      <S.ScoreBoardContainer>
        <PlayersList
          currentTurn={currentTurn}
          playersOut={playersOut}
          setPlayersOut={setPlayersOut}
          currentLetter={currentLetter}
          players={players}
          setPlayers={setPlayers}
        />
      </S.ScoreBoardContainer>
      <WinnerModal
        open={WinnerModalOpen}
        setOpen={setWinnerModalOpen}
        winner={Winner}
        handleResetGame={handleResetGame}
      />
    </S.PageContainer>
  )
}

export default Home
