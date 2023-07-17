import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

const ModalLeaveRoom = ({
  open,
  setOpenModalLeaveRoom,
  LeaveRoom,
  playerData,
}) => {
  const { t } = useTranslation()

  useEffect(() => {
    const handleOutsideClick = event => {
      if (open && event.target.getAttribute('data-testid') === 'modal-testid') {
        setOpenModalLeaveRoom(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
    }
  }, [open, setOpenModalLeaveRoom])
  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TitleContainer>
              {t('Deseja realmente sair da sala?')}
            </S.TitleContainer>
          </S.ModalHeaderContent>

          <S.ModalBodyContent>
            <S.ButtonCancel
              onClick={() => {
                setOpenModalLeaveRoom(false)
              }}
            >
              {t('Cancelar')}
            </S.ButtonCancel>
            <S.Button
              onClick={() => {
                LeaveRoom(playerData)
              }}
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

export default ModalLeaveRoom
