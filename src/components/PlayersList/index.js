import React, { useEffect } from 'react'
import * as S from './styles'

const PlayersList = ({
  currentTurn,
  playersOut,
  setPlayersOut,
  currentLetter,
  players,
  setPlayers,
  roomId,
  socket,
}) => {
  useEffect(() => {
    socket.on('players', data => {
      setPlayers(data)
    })

    try {
      socket.emit('getPlayersName', roomId)

      socket.on('allPlayersNames', data => {
        setPlayers(data)
      })
    } catch (error) {
      console.log(error)
    }
  }, [roomId, setPlayers, socket])

  return (
    <S.ScoreboardContainer>
      <S.ScoreboardTitle>Players</S.ScoreboardTitle>
      {players?.length !== 0 && <S.ScoreText>Pontos</S.ScoreText>}

      <S.ScoreboardList>
        {players &&
          players?.map((player, index) => {
            return (
              <S.PlayerNameContainer key={player?.id}>
                <S.PlayerNameDiv>
                  <S.ScoreboardListItem
                    key={index}
                    color={currentTurn?.id === player?.id}
                    colorLost={
                      (playersOut?.length > 0 || playersOut === undefined) &&
                      playersOut?.some(obj => {
                        return obj?.id === player?.id
                      })
                    }
                  >
                    {player?.name}
                  </S.ScoreboardListItem>
                  {currentTurn?.id === player?.id && currentLetter && (
                    <S.CurrentLetterContainer>
                      {currentLetter}
                    </S.CurrentLetterContainer>
                  )}
                </S.PlayerNameDiv>
                <S.ScoreboardListItemScore>
                  {player?.score}
                </S.ScoreboardListItemScore>
              </S.PlayerNameContainer>
            )
          })}
      </S.ScoreboardList>
    </S.ScoreboardContainer>
  )
}

export default PlayersList
