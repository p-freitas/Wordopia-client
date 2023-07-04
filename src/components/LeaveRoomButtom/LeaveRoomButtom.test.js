import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import LeaveRoomButtom from './index'

describe('LeaveRoomButtom', () => {
  test('should call setOpenModalLeaveRoom when the leave room button is clicked', () => {
    const mockSetOpenModalLeaveRoom = jest.fn()
    const mockSetOpenFriendsLink = jest.fn()
    const { getByLabelText } = render(
      <LeaveRoomButtom
        setOpenModalLeaveRoom={mockSetOpenModalLeaveRoom}
        setOpenFriendsLink={mockSetOpenFriendsLink}
      />
    )

    // Click the leave room button
    fireEvent.click(getByLabelText('Leave room'))

    // Verify that setOpenModalLeaveRoom is called
    expect(mockSetOpenModalLeaveRoom).toHaveBeenCalledTimes(1)
    expect(mockSetOpenModalLeaveRoom).toHaveBeenCalledWith(true)
  })

  test('should call setOpenFriendsLink when the share link button is clicked', () => {
    const mockSetOpenModalLeaveRoom = jest.fn()
    const mockSetOpenFriendsLink = jest.fn()
    const { getByLabelText } = render(
      <LeaveRoomButtom
        setOpenModalLeaveRoom={mockSetOpenModalLeaveRoom}
        setOpenFriendsLink={mockSetOpenFriendsLink}
      />
    )

    // Click the share link button
    fireEvent.click(getByLabelText('Share link'))

    // Verify that setOpenFriendsLink is called
    expect(mockSetOpenFriendsLink).toHaveBeenCalledTimes(1)
    expect(mockSetOpenFriendsLink).toHaveBeenCalledWith(true)
  })
})
