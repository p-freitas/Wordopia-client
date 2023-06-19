import React, { useEffect } from 'react'
import io from 'socket.io-client'
import * as S from './styles'

const socket = io(process.env.REACT_APP_SOCKET_URL, {
  transports: ['websocket'],
})

const PlayersList = ({
  currentTurn,
  playersOut,
  setPlayersOut,
  currentLetter,
  players,
  setPlayers
}) => {
  

  useEffect(() => {
    socket.on('players', data => {
      setPlayers(data)
    })

    try {
      socket.emit('getPlayersName')

      socket.on('allPlayersNames', data => {
        setPlayers(data)
      })
    } catch (error) {
      console.log(error)
    }

    try {
      socket.emit('getPlayersOut')

      socket.on('sendPlayersOut', data => {
        setPlayersOut(data)
      })
    } catch (error) {
      console.log(error)
    }
  }, [setPlayers, setPlayersOut])

  return (
    <S.ScoreboardContainer>
      <S.ScoreboardTitle>Players</S.ScoreboardTitle>
      <S.ScoreboardList>
        {players?.map((player, index) => (
          <S.PlayerNameContainer>
            <S.ScoreboardListItem
              key={index}
              color={currentTurn === player}
              colorLost={playersOut?.includes(player)}
            >
              {player}
            </S.ScoreboardListItem>
            {currentTurn === player && currentLetter && (
              <S.CurrentLetterContainer>{currentLetter}</S.CurrentLetterContainer>
            )}
          </S.PlayerNameContainer>
        ))}
      </S.ScoreboardList>
    </S.ScoreboardContainer>
  )
}

export default PlayersList
