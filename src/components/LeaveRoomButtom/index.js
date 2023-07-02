import React from 'react'
import * as S from './styles'
import { Tooltip } from 'react-tooltip'

const LeaveRoomButtom = ({ setOpenModalLeaveRoom, setOpenFriendsLink }) => {
  const LeaveRoomIcon = (
    <S.Icon className='fas fa-sign-out-alt fa-rotate-180'></S.Icon>
  )
  const ShareIcon = <S.ShareIcon className='fas fa-share-alt'></S.ShareIcon>

  const handleClick = () => {
    setOpenModalLeaveRoom(true)
  }

  const handleClickShareButton = () => {
    setOpenFriendsLink(true)
  }

  return (
    <>
      <S.Button
        onClick={handleClick}
        aria-label='Leave room'
        aria-pressed='false'
        type='button'
        data-tooltip-id='leave-room-tooltip'
        data-tooltip-content='Sair da sala'
        data-tooltip-place='bottom'
      >
        {LeaveRoomIcon}
      </S.Button>
      <Tooltip id='leave-room-tooltip' />
      <S.ButtonShare
        onClick={handleClickShareButton}
        aria-label='Share link'
        aria-pressed='false'
        type='button'
        data-tooltip-id='leave-room-tooltip'
        data-tooltip-content='Compartilhar o link'
        data-tooltip-place='bottom'
      >
        {ShareIcon}
      </S.ButtonShare>
      <Tooltip id='leave-room-tooltip' />
    </>
  )
}

export default LeaveRoomButtom
