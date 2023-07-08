import React from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './styles'

const ModalGameGoingOn = ({ open }) => {
  const { t } = useTranslation()
  if (open) {
    return (
      <S.Container data-testid='modal-testid'>
        <S.ModalContent>
          <S.ModalHeaderContent>
            <S.TextWarning>
              {t('Aguarde a rodada atual terminar para entrar no jogo...')}
            </S.TextWarning>
            <S.ClockSpinner className='clock'></S.ClockSpinner>
          </S.ModalHeaderContent>
        </S.ModalContent>
      </S.Container>
    )
  } else {
    return <></>
  }
}

export default ModalGameGoingOn
