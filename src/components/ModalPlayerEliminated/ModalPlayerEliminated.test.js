import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import ModalPlayerEliminated from './index'

jest.useFakeTimers() // Enable fake timers

describe('ModalPlayerEliminated', () => {
  test('should render the modal when open prop is true', () => {
    const mockSetOpen = jest.fn()
    const playerEliminated = { id: 1, name: 'John Doe' }
    const handleStartTimer = jest.fn()
    const setIsTimerStarted = jest.fn()
    const isTimerStarted = true
    const roomId = 'room-1'

    const { getByTestId, getByText } = render(
      <ModalPlayerEliminated
        open={true}
        setOpen={mockSetOpen}
        playerEliminated={playerEliminated}
        handleStartTimer={handleStartTimer}
        setIsTimerStarted={setIsTimerStarted}
        isTimerStarted={isTimerStarted}
        roomId={roomId}
      />
    )

    const modal = getByTestId('modal-testid')
    expect(modal).toBeInTheDocument()

    const playerName = getByText('John Doe')
    expect(playerName).toBeInTheDocument()

    const counter = getByText('5')
    expect(counter).toBeInTheDocument()
  })

  test('should not render the modal when open prop is false', () => {
    const mockSetOpen = jest.fn()
    const playerEliminated = { id: 1, name: 'John Doe' }
    const handleStartTimer = jest.fn()
    const setIsTimerStarted = jest.fn()
    const isTimerStarted = true
    const roomId = 'room-1'

    const { queryByTestId } = render(
      <ModalPlayerEliminated
        open={false}
        setOpen={mockSetOpen}
        playerEliminated={playerEliminated}
        handleStartTimer={handleStartTimer}
        setIsTimerStarted={setIsTimerStarted}
        isTimerStarted={isTimerStarted}
        roomId={roomId}
      />
    )

    const modal = queryByTestId('modal-testid')
    expect(modal).not.toBeInTheDocument()
  })
})
