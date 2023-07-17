import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

const ModalChangePlayerTurn = ({
  open,
  setOpen,
  players,
  socket,
  roomId,
  playersOut,
}) => {
  const { t } = useTranslation()
  const [SelectValue, setSelectValue] = useState()
  const [playersFiltered, setPlayersFiltered] = useState()

  useEffect(() => {
    const filteredArray = players?.filter(
      item => !playersOut?.some(otherItem => otherItem?.id === item?.id)
    )
    setPlayersFiltered(filteredArray)
  }, [players, playersOut])

  const playersList = playersFiltered?.map(el => {
    return {
      value: el?.id,
      label: el?.name,
    }
  })

  useEffect(() => {
    const handleOutsideClick = event => {
      if (open && event.target.getAttribute('data-testid') === 'modal-testid') {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
    }
  }, [open, setOpen])

  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TitleContainer>
              {t('Selecione para qual jogador será o turno:')}
            </S.TitleContainer>
          </S.ModalHeaderContent>

          <Select
            id='select'
            isClearable
            placeholder={t('Selecione aqui')}
            options={playersList}
            onChange={el => setSelectValue(el)}
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
              disabled={!SelectValue}
              onClick={() => {
                setSelectValue('')
                socket.emit('changeTurnPlayer', roomId, SelectValue.value, true)
                socket.emit('cleanCurrentLetter', roomId)
                setOpen(false)
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

export default ModalChangePlayerTurn
