import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

const ModalServerError = ({ open, setOpen }) => {
  const navigate = useNavigate()
  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TextWarning>
              Houve um erro de processamento no servidor
            </S.TextWarning>
            <S.TitleContainer>
              Por favor, tente criar outra sala
            </S.TitleContainer>
          </S.ModalHeaderContent>

          <S.ModalBodyContent>
            <S.Button
              onClick={() => {
                navigate(`/`)
              }}
            >
              Voltar para o Lobby
            </S.Button>
          </S.ModalBodyContent>
        </S.ModalContent>
      </S.Container>
    )
  } else {
    return <></>
  }
}

export default ModalServerError
