import React, { useEffect } from 'react'
import Confetti from 'react-confetti'
import * as S from './styles'

const WinnerModal = ({
  open,
  winner,
  handleResetGame,
  gameWinner,
  handleResetGameFinished,
  handleClickWordButton,
  currentWord,
}) => {
  useEffect(() => {
    if (open) {
      handleClickWordButton()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        {gameWinner && <Confetti width={window.innerWidth} height={window.innerHeight} />}
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TitleContainer>
              {gameWinner
                ? 'Corno vencedor da partida:'
                : 'Corno vencedor da rodada:'}
            </S.TitleContainer>
          </S.ModalHeaderContent>

          <S.ModalHeaderContent>
            <S.WinnerContainer>{winner[0]?.name} </S.WinnerContainer>
          </S.ModalHeaderContent>

          <S.ModalBodyContent>
            {!gameWinner && (
              <>
                <S.TitleContainer>Próxima palavra sorteada:</S.TitleContainer>
                <S.WordContainer>{currentWord}</S.WordContainer>
              </>
            )}

            <S.Button
              onClick={() => {
                gameWinner ? handleResetGameFinished() : handleResetGame()
              }}
            >
              {gameWinner ? 'Próxima partida' : 'Próxima rodada'}
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
