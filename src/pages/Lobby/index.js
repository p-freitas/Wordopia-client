import React, { useEffect, useState, useRef } from 'react'
import io from 'socket.io-client'
import { useNavigate } from 'react-router-dom'
import ModalTutorial from '../../components/ModalTutorial'
import * as S from './styles'

const Lobby = () => {
  const navigate = useNavigate()
  const socketRef = useRef(null)
  const [room, setRoom] = useState('')
  const [openModalTutorial, setOpenModalTutorial] = useState(false)

  useEffect(() => {
    console.log(localStorage.getItem('firstTime'))
    if (localStorage.getItem('firstTime') === null) {
      setOpenModalTutorial(true)
      localStorage.setItem('firstTime', true)
    }
  }, [])

  const handleJoinRoomButton = roomId => {
    navigate(`/room/${room}`)
  }

  const handleJoinRoom = roomId => {
    navigate(`/room/${roomId}`)
  }

  useEffect(() => {
    socketRef.current = io(process.env.REACT_APP_SOCKET_URL, {
      transports: ['websocket'],
    })
    return () => {
      socketRef.current.disconnect()
    }
  }, [])

  useEffect(() => {
    socketRef.current.on('roomCreated', roomId => {
      handleJoinRoom(roomId)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCreateRoomButton = () => {
    socketRef.current.emit('createRoom')
  }

  return (
    <S.PageContainer>
      <S.HeaderContainer>
        <S.Title>Sururu</S.Title>
      </S.HeaderContainer>
      <S.BodyContainer>
        <S.CreateRoomButton onClick={() => handleCreateRoomButton()}>
          CRIAR SALA
        </S.CreateRoomButton>
        <S.OrText>ou</S.OrText>
        <S.JoinButtonContainer>
          <S.JoinButtonInput
            type='text'
            value={room}
            onChange={e => setRoom(e.target.value)}
            placeholder='Digite o código da sala'
          />
          <S.JoinButton onClick={() => handleJoinRoomButton()}>
            ENTRAR NA SALA
          </S.JoinButton>
        </S.JoinButtonContainer>
      </S.BodyContainer>
      <ModalTutorial setOpen={setOpenModalTutorial} open={openModalTutorial} />
    </S.PageContainer>
  )
}

export default Lobby
