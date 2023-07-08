import React from 'react'
import { useTranslation } from 'react-i18next'
import { Tooltip } from 'react-tooltip'
import * as S from './styles'

const HelpButton = ({ setOpen, open }) => {
  const { t } = useTranslation()
  const width = window.innerWidth
  const HelpIcon = <S.Icon className='fas fa-question'></S.Icon>
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      {width < 767 ? (
        <S.ButtonMobile
          onClick={handleClick}
          aria-label='Tutorial button'
          aria-pressed='false'
          type='button'
          data-tooltip-id='mute-button-tooltip'
          data-tooltip-content='Tutorial'
          data-tooltip-place='top'
        >
          {HelpIcon}
        </S.ButtonMobile>
      ) : (
        <S.Button
          onClick={handleClick}
          aria-label='Tutorial button'
          aria-pressed='false'
          type='button'
        >
          {t('Regras')}
        </S.Button>
      )}
      <Tooltip id='tutorial-button-tooltip' />
    </>
  )
}

export default HelpButton
