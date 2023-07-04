import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ModalLeaveRoom from './index'

describe('ModalLeaveRoom', () => {
  test('should render the modal when open prop is true', () => {
    const mockSetOpenModalLeaveRoom = jest.fn()
    const mockLeaveRoom = jest.fn()
    const playerData = { name: 'John Doe' }

    const { getByTestId, getByText } = render(
      <ModalLeaveRoom
        open={true}
        setOpenModalLeaveRoom={mockSetOpenModalLeaveRoom}
        LeaveRoom={mockLeaveRoom}
        playerData={playerData}
      />
    )

    const modal = getByTestId('modal-testid')
    expect(modal).toBeInTheDocument()

    const cancelButton = getByText('Cancelar')
    expect(cancelButton).toBeInTheDocument()

    const confirmButton = getByText('Confirmar')
    expect(confirmButton).toBeInTheDocument()
  })

  test('should not render the modal when open prop is false', () => {
    const mockSetOpenModalLeaveRoom = jest.fn()
    const mockLeaveRoom = jest.fn()
    const playerData = { name: 'John Doe' }

    const { queryByTestId } = render(
      <ModalLeaveRoom
        open={false}
        setOpenModalLeaveRoom={mockSetOpenModalLeaveRoom}
        LeaveRoom={mockLeaveRoom}
        playerData={playerData}
      />
    )

    const modal = queryByTestId('modal-testid')
    expect(modal).not.toBeInTheDocument()
  })

  test('should call setOpenModalLeaveRoom with false when cancel button is clicked', () => {
    const mockSetOpenModalLeaveRoom = jest.fn()
    const mockLeaveRoom = jest.fn()
    const playerData = { name: 'John Doe' }

    const { getByText } = render(
      <ModalLeaveRoom
        open={true}
        setOpenModalLeaveRoom={mockSetOpenModalLeaveRoom}
        LeaveRoom={mockLeaveRoom}
        playerData={playerData}
      />
    )

    const cancelButton = getByText('Cancelar')
    fireEvent.click(cancelButton)

    expect(mockSetOpenModalLeaveRoom).toHaveBeenCalledTimes(1)
    expect(mockSetOpenModalLeaveRoom).toHaveBeenCalledWith(false)
  })

  test('should call LeaveRoom with playerData when confirm button is clicked', () => {
    const mockSetOpenModalLeaveRoom = jest.fn()
    const mockLeaveRoom = jest.fn()
    const playerData = { name: 'John Doe' }

    const { getByText } = render(
      <ModalLeaveRoom
        open={true}
        setOpenModalLeaveRoom={mockSetOpenModalLeaveRoom}
        LeaveRoom={mockLeaveRoom}
        playerData={playerData}
      />
    )

    const confirmButton = getByText('Confirmar')
    fireEvent.click(confirmButton)

    expect(mockLeaveRoom).toHaveBeenCalledTimes(1)
    expect(mockLeaveRoom).toHaveBeenCalledWith(playerData)
  })
})
