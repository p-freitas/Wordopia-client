import React, { useState, useEffect, useRef } from 'react'
import timeSound from '../../assets/timeSound.mp3'
import timeSoundStop from '../../assets/gemidao.mp3'
import * as S from './style'

import io from 'socket.io-client'

const socket = io(process.env.REACT_APP_SOCKET_URL, {
  transports: ['websocket'],
})

socket.on('connect', () => console.log('[SOCKET] [DISPLAY] => New Connection'))

const Home = () => {
  const [timer, setTimer] = useState(0)
  const [activeLetter, setActiveLetter] = useState(null) // state to keep track of the active letter
  const [textLost, setTextLost] = useState(false) // state to keep track of the active letter
  const audioRef = useRef(null)
  const audioStopRef = useRef(null)

  const letters = [...Array(26)].map((_, index) =>
    String.fromCharCode(65 + index)
  )
  const excludedLetters = new Set(['X', 'Y', 'Ç', 'K', 'Q', 'W', 'J'])
  const filteredLetters = letters.filter(letter => !excludedLetters.has(letter))

  const handleClick = letter => {
    setActiveLetter(letter)
    socket.emit('letter', letter) // emit the letter to the server
  }

  console.log('timer:::', timer)

  // useEffect(() => {
  //   let interval
  //   if (timer > 0) {
  //     interval = setInterval(() => {
  //       setTimer(prevTimer => prevTimer - 1)
  //     }, 1000)
  //   }
  //   return () => clearInterval(interval)
  // }, [])

  useEffect(() => {
    try {
      socket.emit('getAll')

      socket.on('sendAll', data => {
        setActiveLetter(data)
      })
    } catch (error) {
      console.log(error)
    }

    socket.on('timerFinished', () => {
      // show modal
      if (audioStopRef.current && audioRef.current) {
        audioRef.current.pause()
        audioStopRef.current.play()
      }
      setTextLost(true)
    })
  }, [])

  console.log(audioRef.current);

  useEffect(() => {
    setInterval(() => {
      console.log('1');
      setTextLost(false)
    }, 5000)
  }, [])

  socket.on('timer', time => {
    setTimer(time)
  })

  socket.on('lettersArray', data => {
    setActiveLetter(data)
  })

  const handleStartTimer = () => {
    if (!timer) {
      socket.emit('startTimer')
      if (audioRef.current) {
        audioRef.current.play()
      }
    } else {
      socket.emit('resetTimer')
    }
  }

  return (
    <S.PageContainer>
      <audio ref={audioRef} src={timeSound} />
      <audio ref={audioStopRef} src={timeSoundStop} />
      {textLost && <S.TextLost>Se Fodeu</S.TextLost>}
      <S.Title>Trava Letras</S.Title>
      <S.AlphabetContainer>
        {filteredLetters.map(letter => (
          <S.Letter
            background={
              activeLetter?.includes(letter) ? 'red' : 'rgb(57, 167, 255'
            }
            key={letter}
            onClick={() => handleClick(letter)}
            isActive={activeLetter === letter}
          >
            {letter}
          </S.Letter>
        ))}
      </S.AlphabetContainer>
      <S.TimerText>{timer}</S.TimerText>
      <S.ButtonContainer>
        <S.Button onClick={handleStartTimer} />
      </S.ButtonContainer>
    </S.PageContainer>
  )
}

export default Home
