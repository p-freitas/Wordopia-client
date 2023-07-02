import React from 'react'
import { Tooltip } from 'react-tooltip'
import * as S from './styles'

const MuteButton = ({ setIsMuted, isMuted }) => {
  const MuteIcon = <S.Icon className='fas fa-volume-mute'></S.Icon>
  const UnmuteIcon = <S.Icon className='fas fa-volume-up'></S.Icon>

  const handleClick = () => {
    setIsMuted(!isMuted)
  }

  return (
    <>
      <S.Button
        onClick={handleClick}
        isMuted={isMuted}
        aria-label='Mute audio'
        aria-pressed='false'
        type='button'
        data-tooltip-id='mute-button-tooltip'
        data-tooltip-content={isMuted ? 'Ativar som' : 'Desativar som'}
        data-tooltip-place='bottom'
      >
        {isMuted ? MuteIcon : UnmuteIcon}
      </S.Button>
      <Tooltip id='mute-button-tooltip' />
    </>
  )
}

export default MuteButton
