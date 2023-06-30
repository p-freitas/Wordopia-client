import React from 'react'
import * as S from './styles'
import { Tooltip } from 'react-tooltip'

const LeaveRoomButtom = ({ setOpenModalLeaveRoom }) => {
  const LeaveRoomIcon = (
    <S.Icon className='fas fa-sign-out-alt fa-rotate-180'></S.Icon>
  )

  const handleClick = () => {
    setOpenModalLeaveRoom(true)
  }

  return (
    <>
      <S.Button
        onClick={handleClick}
        aria-label='Mute audio'
        aria-pressed='false'
        type='button'
        data-tooltip-id='leave-room-tooltip'
        data-tooltip-content='Sair da sala'
        data-tooltip-place='bottom'
      >
        {LeaveRoomIcon}
      </S.Button>
      <Tooltip id='leave-room-tooltip' />
    </>
  )
}

export default LeaveRoomButtom
