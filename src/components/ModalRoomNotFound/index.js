import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

const ModalRoomNotFound = ({ open }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const screenWidth = window.innerWidth

  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TextWarning>{t('Essa sala não existe!')}</S.TextWarning>
            <S.TitleContainer>
              {t(
                'Verifique se o link está correto ou se o código foi digitado corretamente'
              )}
            </S.TitleContainer>
          </S.ModalHeaderContent>

          <S.ModalBodyContent>
            <S.Button
              onClick={() => {
                navigate(`/`)
              }}
            >
              {t('Voltar para o Lobby')}
            </S.Button>
            {screenWidth < 767 && (
              <S.ButtonReload
                onClick={() => {
                  window.location.reload()
                }}
              >
                {t('Atualizar a página')}
              </S.ButtonReload>
            )}
          </S.ModalBodyContent>
        </S.ModalContent>
      </S.Container>
    )
  } else {
    return <></>
  }
}

export default ModalRoomNotFound
