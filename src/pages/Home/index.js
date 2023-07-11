import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSnackbar } from 'react-simple-snackbar'
import { useTranslation } from 'react-i18next'
import socket from '../../socket'
import timeSound from '../../assets/timeSound.mp3'
import timeSoundStop from '../../assets/eliminated.mp3'
import playerTurnSound from '../../assets/playerTurnSound.mp3'
import winnerRoundSound from '../../assets/winnerRound.mp3'
import ModalPlayerName from '../../components/ModalPlayerName'
import PlayersList from '../../components/PlayersList'
import WinnerModal from '../../components/WinnerModal'
import MuteButton from '../../components/MuteButton'
import HelpButton from '../../components/HelpButton'
import LeaveRoomButtom from '../../components/LeaveRoomButtom'
import ModalRemovePlayer from '../../components/ModalRemovePlayer'
import ModalChangePlayerTurn from '../../components/ModalChangePlayerTurn'
import ModalLeaveRoom from '../../components/ModalLeaveRoom'
import ModalFriendsLink from '../../components/ModalFriendsLink'
import ModalPlayerEliminated from '../../components/ModalPlayerEliminated'
import ModalTutorial from '../../components/ModalTutorial'
import ModalRoomNotFound from '../../components/ModalRoomNotFound'
import ModalWaitingPlayers from '../../components/ModalWaitingPlayers'
import ModalGameGoingOn from '../../components/ModalGameGoingOn'
import ModalServerError from '../../components/ModalServerError'
import '../../styles/styles.css'
import * as S from './style'

socket.on('connect', () => console.log('[SOCKET] [DISPLAY] => New Connection'))

const options = {
  position: 'top-center',
  style: {
    backgroundColor: 'rgb(72 90 255)',
    color: 'white',
    fontFamily: 'MyFont',
    fontSize: '20px',
    textAlign: 'center',
  },
}

const Home = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [openSnackbar] = useSnackbar(options)
  const screenWidth = window.innerWidth
  const { t } = useTranslation()

  const [timer, setTimer] = useState()
  const [activeLetter, setActiveLetter] = useState(null)
  const [filteredLetters, setFilteredLetters] = useState()
  const [playerModalOpen, setPlayerModalOpen] = useState(false)
  const [WinnerModalOpen, setWinnerModalOpen] = useState(false)
  const [playerName, setPlayerName] = useState()
  const [currentTurn, setCurrentTurn] = useState('')
  const [players, setPlayers] = useState([])
  const [playersOut, setPlayersOut] = useState()
  const [currentLetter, setCurrentLetter] = useState()
  const [Winner, setWinner] = useState()
  const [gameWinner, setGameWinner] = useState()
  const [isMuted, setIsMuted] = useState(false)
  const [currentWord, setCurrentWord] = useState()
  const [RemovePlayerOpenModal, setRemovePlayerOpenModal] = useState()
  const [roomId, setRoomId] = useState('')
  const [openModalLeaveRoom, setOpenModalLeaveRoom] = useState(false)
  const [openFriendsLink, setOpenFriendsLink] = useState(false)
  const [openPlayerEliminatedModal, setOpenPlayerEliminatedModal] =
    useState(false)
  const [playerEliminated, setPlayerEliminated] = useState(false)
  const [isTimerStarted, setIsTimerStarted] = useState(false)
  const [openModalTutorial, setOpenModalTutorial] = useState(false)
  const [openModalChangeTurnPlayer, setOpenModalChangeTurnPlayer] =
    useState(false)
  const [showChangeTurnPlayerButton, setShowChangeTurnPlayerButton] =
    useState(true)
  const [roomLeader, setRoomLeader] = useState()
  const [openModalRoomNotFound, setOpenModalRoomNotFound] = useState(false)
  const [openModalWaitingPlayers, setOpenModalWaitingPlayers] = useState(false)
  const [openModalGameGoingOn, setOpenModalGameGoingOn] = useState(false)
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  const [isGameGoingOn, setIsGameGoingOn] = useState(false)
  const [openModalServerError, setOpenModalServerError] = useState(false)

  const audioRef = useRef(null)
  const audioStopRef = useRef(null)
  const audioPlayerTurnSoundRef = useRef(null)
  const audiowinnerRoundRef = useRef(null)

  useEffect(() => {
    setRoomId(location.pathname.split('/')[2])
  }, [location.pathname])

  useEffect(() => {
    const room = location.pathname.split('/')[2]
    socket.emit('joinRoom', room)
  }, [location.pathname])

  useEffect(() => {
    socket.emit('getLetters', roomId)

    socket.on('sendLetters', data => {
      setFilteredLetters(data)
    })
  }, [roomId])

  useEffect(() => {
    // Event handler for beforeunload event
    const handleBeforeUnload = () => {
      if (localStorage.getItem(roomId)) {
        localStorage.removeItem(roomId)
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [roomId])

  useEffect(() => {
    if (players?.length <= 1 && localStorage.getItem(roomId)) {
      setOpenModalWaitingPlayers(true)
      socket.emit('clearTimer', roomId)
    } else {
      setOpenModalWaitingPlayers(false)
    }
  }, [players?.length, roomId])

  useEffect(() => {
    socket.on('players', data => {
      setPlayers(data)
    })

    return () => {
      socket.off('players')
    }
  }, [setPlayers])

  useEffect(() => {
    try {
      socket.emit('getPlayersName', roomId)

      socket.on('allPlayersNames', data => {
        setPlayers(data)
      })
    } catch (error) {
      console.log(error)
    }
  }, [roomId, setPlayers])

  useEffect(() => {
    try {
      socket.emit('getAll', roomId)

      socket.on('sendAll', data => {
        setActiveLetter(data)
      })
    } catch (error) {
      console.log(error)
    }

    try {
      socket.emit('getWord', roomId)

      socket.on('sendWord', data => {
        setCurrentWord(data)
      })
    } catch (error) {
      console.log(error)
    }

    setPlayerModalOpen(true)
  }, [roomId])

  useEffect(() => {
    socket.on('turn', (data, isGameFinished) => {
      setCurrentTurn(data)

      if (
        JSON.parse(localStorage.getItem(roomId))?.playerId === data?.id &&
        !isGameFinished
      ) {
        audioPlayerTurnSoundRef?.current?.play()
        audioRef?.current?.play()
      } else {
        audioRef?.current?.pause()
      }
    })

    return () => {
      socket.off('turn')
    }
  }, [roomId])

  useEffect(() => {
    socket.emit('getWord', roomId)

    socket.on('sendWord', data => {
      setCurrentWord(data)
    })
  }, [roomId])

  useEffect(() => {
    socket.on('playersOut', data => {
      setPlayersOut(data)
    })

    return () => {
      socket.off('playersOut')
    }
  }, [])

  useEffect(() => {
    socket.on('timerFinished', playerData => {
      if (audioStopRef.current && audioRef.current) {
        audioRef.current.pause()
        audioStopRef.current.play()
      }
      setPlayerEliminated(playerData)
      setOpenPlayerEliminatedModal(true)
      setIsTimerStarted(true)
    })

    return () => {
      socket.off('timerFinished')
    }
  }, [])

  useEffect(() => {
    socket.emit('getPlayersOut', roomId)

    socket.on('sendPlayersOut', data => {
      setPlayersOut(data)
    })
  }, [roomId])

  useEffect(() => {
    socket.emit('getCurrentLetter', roomId)

    socket.emit('getCurrentTurnPlayer', roomId)

    socket.on('sendCurrentTurnPlayer', data => {
      setCurrentTurn(data)
    })
  }, [roomId])

  useEffect(() => {
    socket.on('sendLinkForFriends', () => {
      setOpenFriendsLink(true)
    })

    return () => {
      socket.off('sendLinkForFriends')
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('firstTime') === null) {
      setOpenModalTutorial(true)
      localStorage.setItem('firstTime', true)
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    players?.map(player => {
      if (
        player?.leader &&
        player?.id === JSON.parse(localStorage.getItem(roomId))?.playerId
      ) {
        setRoomLeader(player)
      }
    })
  }, [players, roomId])

  useEffect(() => {
    socket.on('roomNotFound', () => {
      setOpenModalRoomNotFound(true)
    })
  }, [])

  useEffect(() => {
    socket.on('serverError', () => {
      setOpenModalServerError(true)
    })

    return () => {
      socket.off('serverError')
    }
  }, [])

  useEffect(() => {
    socket.emit('getGameGoingOn', roomId)

    if (isGameGoingOn && !localStorage.getItem(roomId)) {
      setOpenModalGameGoingOn(true)
    } else {
      setOpenModalGameGoingOn(false)
    }
  }, [isGameGoingOn, roomId])

  useEffect(() => {
    socket.on('timer', time => {
      setTimer(time)
    })

    return () => {
      socket.off('timer')
    }
  }, [])

  useEffect(() => {
    socket.on('lettersArray', data => {
      setActiveLetter(data)
    })

    return () => {
      socket.off('lettersArray')
    }
  }, [])

  useEffect(() => {
    socket.on('currentLetter', currentLetter => {
      setCurrentLetter(currentLetter)
    })

    return () => {
      socket.off('currentLetter')
    }
  }, [])

  useEffect(() => {
    socket.on('wordGenerated', data => {
      setCurrentWord(data)
    })

    return () => {
      socket.off('wordGenerated')
    }
  }, [])

  useEffect(() => {
    socket.on('winner', winner => {
      setWinnerModalOpen(true)
      setWinner(winner)
      audioRef?.current?.pause()
      audiowinnerRoundRef?.current?.play()
    })

    return () => {
      socket.off('winner')
    }
  }, [])

  useEffect(() => {
    socket.on('gameWinner', winner => {
      setWinnerModalOpen(true)
      setGameWinner(winner)
      audioRef?.current?.pause()
      audiowinnerRoundRef?.current?.play()
    })

    return () => {
      socket.off('gameWinner')
    }
  }, [])

  useEffect(() => {
    socket.on('gameReseted', () => {
      setWinnerModalOpen(false)
      setShowChangeTurnPlayerButton(true)
    })

    return () => {
      socket.off('gameReseted')
    }
  }, [])

  useEffect(() => {
    socket.on('resetGameWinner', winner => {
      setGameWinner(winner)
    })

    return () => {
      socket.off('resetGameWinner')
    }
  }, [])

  useEffect(() => {
    socket.on('gameGoingOn', status => {
      status && setShowChangeTurnPlayerButton(false)
      setIsGameGoingOn(status)
    })

    return () => {
      socket.off('gameGoingOn')
    }
  }, [openSnackbar])

  useEffect(() => {
    socket.on('playerDisconnected', playerData => {
      openSnackbar(
        `${playerData?.name ? playerData?.name : playerData?.playerName} ${t(
          'saiu da sala'
        )}`,
        5000
      )
    })

    return () => {
      socket.off('playerDisconnected')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openSnackbar])

  useEffect(() => {
    socket.on('playerConnected', playerData => {
      openSnackbar(`${playerData?.playerName} ${t('entrou da sala')}`, 5000)
    })

    return () => {
      socket.off('playerConnected')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openSnackbar])

  useEffect(() => {
    socket.on('resetCounter', resetCounter => {
      resetCounter !== 0 &&
        openSnackbar(
          `${t('Agora são')} ${resetCounter + 1} ${t('palavras!')}`,
          5000
        )
    })

    return () => {
      socket.off('resetCounter')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openSnackbar])

  const handleClick = letter => {
    if (!activeLetter?.includes(letter) && players?.length > 1) {
      socket.emit('letter', { roomId, letter })
    }
  }

  const handlePlayerNameChange = event => {
    if (event.target.value.length <= 12) {
      setPlayerName(event.target.value)
    }
  }

  const handlePlayerNameSubmit = playerData => {
    socket.emit('playerName', playerData, roomId)
    const playerDataJson = {
      playerName: playerData.playerName,
      playerId: playerData.id,
    }
    localStorage.setItem(roomId, JSON.stringify(playerDataJson))
    setPlayerName(undefined)
    setPlayerModalOpen(false)
  }

  const handleClickWordButton = () => {
    socket.emit('wordsButtonClick', roomId)
    // socket.emit('getWord', roomId)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResetActiveLetters = useCallback(() => {
    socket.emit('resetActiveLetters', roomId)
    audioRef.current.pause()
  })

  const handleStartTimer = useCallback(() => {
    if (
      currentTurn?.id === JSON.parse(localStorage.getItem(roomId))?.playerId &&
      players?.length > 1
    ) {
      if (timer === undefined) {
        socket.emit('startTimer', roomId)
        socket.emit('cleanCurrentLetter', roomId)
        socket.emit('changeTurnPlayer', roomId)
        socket.emit('setGameGoingOn', roomId, true)
      } else {
        socket.emit('changeTurnPlayer', roomId)
        socket.emit('cleanCurrentLetter', roomId)
        socket.emit('setGameGoingOn', roomId, true)

        if (activeLetter?.length === filteredLetters?.length) {
          handleResetActiveLetters()
        }
      }
    }
  }, [
    activeLetter?.length,
    currentTurn?.id,
    filteredLetters?.length,
    handleResetActiveLetters,
    players?.length,
    roomId,
    timer,
  ])

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Space' || event.keyCode === 32) {
        event.preventDefault()
        handleStartTimer()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleStartTimer])

  const handleResetGame = () => {
    socket.emit('resetGame', roomId)
    audioRef.current.pause()
    setWinnerModalOpen(false)
    setWinner(undefined)

    // eslint-disable-next-line array-callback-return
    players?.map(player => {
      if (
        localStorage.getItem(roomId) &&
        player?.leader &&
        player?.id === JSON.parse(localStorage.getItem(roomId)).playerId
      ) {
        socket.emit('setGameGoingOn', roomId, false)
      }
    })
  }

  const handleResetGameFinished = () => {
    socket.emit('gameFinished', roomId)
    audioRef.current.pause()
    setWinnerModalOpen(false)
    setGameWinner(undefined)

    // eslint-disable-next-line array-callback-return
    players?.map(player => {
      if (
        localStorage.getItem(roomId) &&
        player?.leader &&
        player?.id === JSON.parse(localStorage.getItem(roomId)).playerId
      ) {
        socket.emit('setGameGoingOn', roomId, false)
      }
    })
  }

  const handleRemovePlayerClick = () => {
    setRemovePlayerOpenModal(true)
  }

  const LeaveRoom = playerData => {
    socket.emit('leaveRoom', roomId, JSON.parse(playerData))
    localStorage.removeItem(roomId)
    navigate(`/`)
  }

  const handleMouseDown = () => {
    setIsButtonClicked(true)
  }

  const handleMouseUp = () => {
    setIsButtonClicked(false)
  }

  return (
    <S.PageContainer>
      <ModalServerError
        open={openModalServerError}
        setOpen={setOpenModalServerError}
      />
      <S.TabletopContainer>
        <S.Title>WORDOPIA</S.Title>
        <audio ref={audioRef} src={timeSound} muted={isMuted} />
        <audio ref={audioStopRef} src={timeSoundStop} muted={isMuted} />
        <audio
          ref={audioPlayerTurnSoundRef}
          src={playerTurnSound}
          muted={isMuted}
        />
        <audio
          ref={audiowinnerRoundRef}
          src={winnerRoundSound}
          muted={isMuted}
        />
        {screenWidth < 767 && (
          <S.WordButtonContainer>
            <S.Word>{currentWord}</S.Word>
            <S.WordButton onClick={() => handleClickWordButton()}>
              {t('Gerar novo tema')}
            </S.WordButton>
          </S.WordButtonContainer>
        )}
        <S.AlphabetContainer>
          {filteredLetters?.map(letter => (
            <S.Letter
              background={activeLetter?.includes(letter) ? '0.2' : '1'}
              key={letter}
              onClick={() => handleClick(letter)}
              isActive={activeLetter === letter}
              cursor={activeLetter?.includes(letter)}
            >
              {letter}
            </S.Letter>
          ))}
        </S.AlphabetContainer>
        <S.TimerContainer>
          <S.TimerText>{timer}</S.TimerText>
        </S.TimerContainer>
        <S.RedButton
          id='button'
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchend={handleMouseUp}
          className={isButtonClicked ? 'pulse-bg' : ''}
          onClick={handleStartTimer}
        >
          <div id='top' className={isButtonClicked ? 'top-click' : ''}></div>
          <div id='bottom'></div>
          <div
            id='body'
            class='body'
            className={isButtonClicked ? 'body-click' : ''}
          ></div>
          <div id='floor'></div>
        </S.RedButton>
        <ModalWaitingPlayers open={openModalWaitingPlayers} />
        {localStorage.getItem(roomId) === null && (
          <ModalPlayerName
            handlePlayerNameSubmit={handlePlayerNameSubmit}
            handlePlayerNameChange={handlePlayerNameChange}
            playerName={playerName}
            open={playerModalOpen}
            setOpen={setPlayerModalOpen}
            openModalGameGoingOn={openModalGameGoingOn}
          />
        )}
      </S.TabletopContainer>
      <S.ScoreBoardContainer>
        {screenWidth >= 768 && (
          <S.WordButtonContainer>
            <S.Word>{t(currentWord)}</S.Word>
            <S.WordButton onClick={() => handleClickWordButton()}>
              {t('Gerar novo tema')}
            </S.WordButton>
          </S.WordButtonContainer>
        )}

        <PlayersList
          currentTurn={currentTurn}
          playersOut={playersOut}
          setPlayersOut={setPlayersOut}
          currentLetter={currentLetter}
          players={players}
          setPlayers={setPlayers}
          roomId={roomId}
          socket={socket}
        />
        {roomLeader?.id ===
          JSON.parse(localStorage.getItem(roomId))?.playerId && (
          <S.RemovePlayerButton onClick={() => handleRemovePlayerClick()}>
            {t('Eliminar jogador')}
          </S.RemovePlayerButton>
        )}

        {roomLeader?.id ===
          JSON.parse(localStorage.getItem(roomId))?.playerId &&
          showChangeTurnPlayerButton && (
            <S.WordButton onClick={() => setOpenModalChangeTurnPlayer(true)}>
              {t('Mudar turno atual')}
            </S.WordButton>
          )}
      </S.ScoreBoardContainer>
      <ModalGameGoingOn open={openModalGameGoingOn} />
      <WinnerModal
        open={WinnerModalOpen}
        setOpen={setWinnerModalOpen}
        winner={Winner}
        handleResetGame={handleResetGame}
        gameWinner={gameWinner}
        handleResetGameFinished={handleResetGameFinished}
        handleClickWordButton={handleClickWordButton}
        currentWord={currentWord}
        players={players}
        roomId={roomId}
      />
      <MuteButton setIsMuted={setIsMuted} isMuted={isMuted} />
      <HelpButton
        setOpen={setOpenModalTutorial}
        open={openModalTutorial}
        isHome={true}
      />
      <LeaveRoomButtom
        setOpenModalLeaveRoom={setOpenModalLeaveRoom}
        setOpenFriendsLink={setOpenFriendsLink}
      />
      <ModalRemovePlayer
        open={RemovePlayerOpenModal}
        setOpen={setRemovePlayerOpenModal}
        players={players}
        socket={socket}
        roomId={roomId}
        playersOut={playersOut}
        currentTurn={currentTurn}
        winner={Winner}
      />
      <ModalChangePlayerTurn
        open={openModalChangeTurnPlayer}
        setOpen={setOpenModalChangeTurnPlayer}
        players={players}
        socket={socket}
        roomId={roomId}
        playersOut={playersOut}
      />
      <ModalLeaveRoom
        setOpenModalLeaveRoom={setOpenModalLeaveRoom}
        open={openModalLeaveRoom}
        LeaveRoom={LeaveRoom}
        playerData={localStorage.getItem(roomId)}
      />
      <ModalRoomNotFound open={openModalRoomNotFound} />
      <ModalFriendsLink setOpen={setOpenFriendsLink} open={openFriendsLink} />
      <ModalPlayerEliminated
        setOpen={setOpenPlayerEliminatedModal}
        open={openPlayerEliminatedModal}
        playerEliminated={playerEliminated}
        setPlayerEliminated={setPlayerEliminated}
        isTimerStarted={isTimerStarted}
        setIsTimerStarted={setIsTimerStarted}
        handleStartTimer={handleStartTimer}
        roomId={roomId}
      />
      <ModalTutorial setOpen={setOpenModalTutorial} open={openModalTutorial} />
    </S.PageContainer>
  )
}

export default Home
