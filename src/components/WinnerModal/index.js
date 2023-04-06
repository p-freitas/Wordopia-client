import React from 'react'
import * as S from './styles'

const WinnerModal = ({
  open,
  winner,
  handleResetGame,
}) => {
  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TitleContainer>Corno vencedor da rodada: </S.TitleContainer>
          </S.ModalHeaderContent>

          <S.ModalHeaderContent>
            <S.TitleContainer>{winner} </S.TitleContainer>
          </S.ModalHeaderContent>

          <S.ModalBodyContent>
            <S.Button
              onClick={() => {
                handleResetGame()
              }}
            >
              Próxima rodada
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
