import React from 'react'
import * as S from './styles'

const ModalPlayerName = ({
  open,
  setOpen,
  handlePlayerNameSubmit,
  handlePlayerNameChange,
  playerName,
}) => {
  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TitleContainer>Digite o seu nome: </S.TitleContainer>
            <S.TextWarning>Máximo 12 caracteres</S.TextWarning>
          </S.ModalHeaderContent>

          <S.NameInput
            value={playerName}
            onChange={e => handlePlayerNameChange(e)}
          />

          <S.ModalBodyContent>
            <S.ButtonCancel
              onClick={() => {
                setOpen(false)
              }}
            >
              Fechar
            </S.ButtonCancel>
            <S.Button
              disabled={!playerName}
              onClick={() => {
                handlePlayerNameSubmit(playerName)
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

export default ModalPlayerName
