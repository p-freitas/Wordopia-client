import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

const ModalRoomNotFound = ({ open }) => {
  const navigate = useNavigate()
  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TextWarning>Essa sala não existe!</S.TextWarning>
            <S.TitleContainer>
              Verifique se o link está correto ou se o código foi digitado
              corretamente
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

export default ModalRoomNotFound
