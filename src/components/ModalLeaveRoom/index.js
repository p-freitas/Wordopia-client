import React from 'react'
import * as S from './styles'

const ModalLeaveRoom = ({ open, setOpenModalLeaveRoom, LeaveRoom, playerData }) => {
  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TitleContainer>Desajar realmente sair da sala?</S.TitleContainer>
          </S.ModalHeaderContent>

          <S.ModalBodyContent>
            <S.ButtonCancel
              onClick={() => {
                setOpenModalLeaveRoom(false)
              }}
            >
              Cancelar
            </S.ButtonCancel>
            <S.Button
              onClick={() => {
                LeaveRoom(playerData)
              }}
            >
              Confirmar
            </S.Button>
          </S.ModalBodyContent>
        </S.ModalContent>
      </S.Container>
    )
  } else {
    return <></>
  }
}

export default ModalLeaveRoom
