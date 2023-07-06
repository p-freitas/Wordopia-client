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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('firstTime') === null) {
      setOpenModalTutorial(true)
      localStorage.setItem('firstTime', true)
    }
  }, [])

  const handleJoinRoomButton = () => {
    navigate(`/room/${room}`)
    setLoading(true)
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
    setLoading(true)
  }

  const handleRoomNameChange = event => {
    if (event.target.value.length <= 6) {
      setRoom(event.target.value.toUpperCase())
    }
  }

  console.log('loading:', loading);

  return (
    <S.PageContainer>
      <S.LoadingOverlay loading={loading}>
        <S.Spinner loading={loading}/>
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
              onChange={e => handleRoomNameChange(e)}
              placeholder='Digite o código da sala'
            />
            <S.JoinButton onClick={() => handleJoinRoomButton()}>
              ENTRAR NA SALA
            </S.JoinButton>
          </S.JoinButtonContainer>
        </S.BodyContainer>
        <ModalTutorial
          setOpen={setOpenModalTutorial}
          open={openModalTutorial}
        />
      </S.LoadingOverlay>
    </S.PageContainer>
  )
}

export default Lobby
