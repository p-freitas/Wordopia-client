import React from 'react'
import * as S from './styles'

const WinnerModal = ({
  open,
  winner,
  handleResetGame,
  gameWinner,
  handleResetGameFinished
}) => {
  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TitleContainer>{gameWinner ? 'Corno vencedor da partida:' : 'Corno vencedor da rodada:'}</S.TitleContainer>
          </S.ModalHeaderContent>

          <S.ModalHeaderContent>
            <S.TitleContainer>{winner[0]?.name} </S.TitleContainer>
          </S.ModalHeaderContent>

          <S.ModalBodyContent>
            <S.Button
              onClick={() => {
                gameWinner ? handleResetGameFinished() : handleResetGame()
                
              }}
            >
              {gameWinner ? 'Próximo partida' : 'Próxima rodada'}
            </S.Button>
          </S.ModalBodyContent>
        </S.ModalContent>
      </S.Container>
    )
  } else {
    return <></>
  }
}

export default WinnerModal
