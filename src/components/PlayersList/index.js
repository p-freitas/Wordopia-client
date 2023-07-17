import React from 'react'
import { useTranslation } from 'react-i18next'
import VoiceChat from '../VoiceChat'
import * as S from './styles'

const PlayersList = ({ currentTurn, playersOut, currentLetter, players, socket, roomId }) => {
  const { t } = useTranslation()

  return (
    <S.ScoreboardContainer>
      <S.ScoreboardTitle>{t('Jogadores')}</S.ScoreboardTitle>
      {players?.length !== 0 && <S.ScoreText>{t('Pontos')}</S.ScoreText>}

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
                    data-testid='player-list-modal-text'
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
          <VoiceChat socket={socket} roomId={roomId}/>
      </S.ScoreboardList>
    </S.ScoreboardContainer>
  )
}

export default PlayersList
