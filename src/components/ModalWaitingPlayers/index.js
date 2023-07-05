import React from 'react'
import * as S from './styles'

const ModalWaitingPlayers = ({ open }) => {
  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TextWarning>Aguardando outro jogador entrar...</S.TextWarning>

            <S.ClockSpinner className='clock'></S.ClockSpinner>
          </S.ModalHeaderContent>
        </S.ModalContent>
      </S.Container>
    )
  } else {
    return <></>
  }
}

export default ModalWaitingPlayers
