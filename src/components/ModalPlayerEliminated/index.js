import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

const ModalPlayerEliminated = ({
  open,
  setOpen,
  playerEliminated,
  handleStartTimer,
  setIsTimerStarted,
  isTimerStarted,
  roomId,
}) => {
  const { t } = useTranslation()
  const [count, setCount] = useState(5)
  const timerRef = useRef(null)

  useEffect(() => {
    if (isTimerStarted) {
      timerRef.current = setInterval(() => {
        setCount(prevCount => prevCount - 1)
      }, 1000)
    }

    return () => {
      clearInterval(timerRef.current)
    }
  }, [isTimerStarted])

  const handleTimerEnd = useCallback(() => {
    setOpen(false)
    setCount(5)
    clearInterval(timerRef.current)
    setIsTimerStarted(false)
    JSON.parse(localStorage.getItem(roomId))?.playerId ===
      playerEliminated?.id && handleStartTimer()
  }, [
    handleStartTimer,
    playerEliminated?.id,
    roomId,
    setIsTimerStarted,
    setOpen,
  ])

  useEffect(() => {
    if (count === 0) {
      handleTimerEnd()
    }
  }, [count, handleTimerEnd])

  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TitleContainer>{t('Jogador eliminado:')}</S.TitleContainer>
          </S.ModalHeaderContent>

          <S.ModalHeaderContent>
            <S.PlayerNameContainer>
              {playerEliminated?.name}
            </S.PlayerNameContainer>
          </S.ModalHeaderContent>

          <S.ModalBodyContent>
            <S.TitleContainer>{t('Próximo jogador em...')}</S.TitleContainer>
            <S.CounterContainer>{count}</S.CounterContainer>
          </S.ModalBodyContent>
        </S.ModalContent>
      </S.Container>
    )
  } else {
    return <></>
  }
}

export default ModalPlayerEliminated
