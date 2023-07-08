import React, { useEffect, useCallback } from 'react'
import { v4 as uuid } from 'uuid'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

const ModalPlayerName = ({
  open,
  setOpen,
  handlePlayerNameSubmit,
  handlePlayerNameChange,
  playerName,
  openModalGameGoingOn,
}) => {
  const { t } = useTranslation()
  const handleSubmitPlayer = useCallback(() => {
    const newUuid = uuid()
    handlePlayerNameSubmit({ playerName: playerName, id: newUuid })
  }, [handlePlayerNameSubmit, playerName])
  useEffect(() => {
    const listener = event => {
      if (
        (event.code === 'Enter' || event.code === 'NumpadEnter') &&
        !openModalGameGoingOn
      ) {
        handleSubmitPlayer()
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [handleSubmitPlayer, openModalGameGoingOn])
  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TitleContainer>{t('Digite o seu nome: ')}</S.TitleContainer>
            <S.TextWarning>{t('Máximo 12 caracteres')}</S.TextWarning>
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
              {t('Fechar')}
            </S.ButtonCancel>
            <S.Button
              disabled={!playerName}
              onClick={() => handleSubmitPlayer()}
            >
              {t('Confirmar')}
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
