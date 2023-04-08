import React from 'react'
import * as S from './styles'

const MuteButton = ({ setIsMuted, isMuted }) => {
  const MuteIcon = <S.Icon className='fas fa-volume-mute'></S.Icon>
  const UnmuteIcon = <S.Icon className='fas fa-volume-up'></S.Icon>

  const handleClick = () => {
    setIsMuted(!isMuted)
  }

  return (
    <S.Button
      onClick={handleClick}
      isMuted={isMuted}
      aria-label='Mute audio'
      aria-pressed='false'
      type='button'
    >
      {isMuted ? MuteIcon : UnmuteIcon}
    </S.Button>
  )
}

export default MuteButton
