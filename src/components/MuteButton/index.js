import React from 'react'
import styled from 'styled-components'

const MuteButton = ({ setIsMuted, isMuted }) => {
  const Button = styled.button`
    position: fixed;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background-color: ${isMuted ? 'red' : 'green'};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  `

  const Icon = styled.i`
    font-size: 20px;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `

  const MuteIcon = <Icon className='fas fa-volume-mute'></Icon>
  const UnmuteIcon = <Icon className='fas fa-volume-up'></Icon>

  const handleClick = () => {
    setIsMuted(!isMuted)
  }

  return (
    <Button onClick={handleClick}>{isMuted ? MuteIcon : UnmuteIcon}</Button>
  )
}

export default MuteButton
