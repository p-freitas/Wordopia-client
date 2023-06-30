import React, { useEffect, useState, useRef } from 'react'
import io from 'socket.io-client'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

const Lobby = () => {
  const navigate = useNavigate()
  const socketRef = useRef(null)
  const [room, setRoom] = useState('') // Store the room identifier

  useEffect(() => {
    socketRef.current = io(process.env.REACT_APP_SOCKET_URL, {
      transports: ['websocket'],
    }) // Connect to the server
    return () => {
      socketRef.current.disconnect() // Disconnect from the server
    }
  }, [])

  useEffect(() => {
    socketRef.current.on('roomCreated', roomId => {
      handleJoinRoomButton(roomId)
    })
  }, [navigate])

  const handleCreateRoomButton = () => {
    socketRef.current.emit('createRoom')
  }

  const handleJoinRoomButton = roomId => {
    navigate(`/room/${roomId}`)
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
    </S.PageContainer>
  )
}

export default Lobby
