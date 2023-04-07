import React, { useState } from 'react'
import * as S from './styles'

const ModalReset = ({ open, setOpen, handleResetAllGame }) => {
  const [Password, setPassword] = useState()
  if (open) {
    const handlePasswordChange = event => {
      setPassword(event.target.value)
    }

    console.log(Password);

    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TitleContainer>Digite a senha: </S.TitleContainer>
          </S.ModalHeaderContent>

          <S.NameInput onChange={e => handlePasswordChange(e)} />

          <S.ModalBodyContent>
            <S.ButtonCancel
              onClick={() => {
                setOpen(false)
              }}
            >
              Fechar
            </S.ButtonCancel>
            <S.Button
              disabled={Password !== 'cornos'}
              onClick={() => {
                setPassword('')
                handleResetAllGame()
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

export default ModalReset
