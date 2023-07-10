import React from 'react'
import { useTranslation } from 'react-i18next'
import { Tooltip } from 'react-tooltip'
import * as S from './styles'

const HelpButton = ({ setOpen, open, setOpenBugsModal }) => {
  const { t } = useTranslation()
  const width = window.innerWidth
  const HelpIcon = <S.Icon className='fas fa-question'></S.Icon>
  const BugsIcon = <S.IconBug className='fas fa-bug'></S.IconBug>

  const handleClick = () => {
    setOpen(!open)
  }

  const handleClickBugsReport = () => {
    setOpenBugsModal(!open)
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
      <S.ButtonBugs
        onClick={handleClickBugsReport}
        aria-label='Report bugs button'
        aria-pressed='false'
        type='button'
        data-tooltip-id='mute-button-tooltip'
        data-tooltip-content={t('Reportar bugs')}
        data-tooltip-place='top'
      >
        {BugsIcon}
      </S.ButtonBugs>
      <Tooltip id='tutorial-button-tooltip' />
    </>
  )
}

export default HelpButton
