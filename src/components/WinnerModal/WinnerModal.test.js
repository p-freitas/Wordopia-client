import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import WinnerModal from './index'

// Mock the react-confetti component
jest.mock('react-confetti', () => {
  return function MockedConfetti() {
    return <div data-testid='confetti-mock'></div>
  }
})

describe('WinnerModal', () => {
  beforeEach(() => {
    jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue(
      JSON.stringify({ playerId: 1 }) // Mock the value stored in localStorage.getItem(roomId)
    )
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test('should render the winner modal with correct content', () => {
    const mockHandleResetGame = jest.fn()
    const mockHandleResetGameFinished = jest.fn()
    const mockHandleClickWordButton = jest.fn()

    const winner = [{ id: 1, name: 'Player 1' }]
    const currentWord = 'example'
    const players = [{ id: 1, name: 'Player 1', leader: true }]

    const { getByText, getByTestId } = render(
      <WinnerModal
        open={true}
        winner={winner}
        handleResetGame={mockHandleResetGame}
        gameWinner={false}
        handleResetGameFinished={mockHandleResetGameFinished}
        handleClickWordButton={mockHandleClickWordButton}
        currentWord={currentWord}
        players={players}
        roomId='room123'
      />
    )

    const modalTitle = getByText('Corno vencedor da rodada:')
    const winnerName = getByText('Player 1')
    const nextRoundButton = getByText('Próxima rodada')
    const currentWordElement = getByText('Próxima palavra sorteada:')

    expect(modalTitle).toBeInTheDocument()
    expect(winnerName).toBeInTheDocument()
    expect(nextRoundButton).toBeInTheDocument()
    expect(currentWordElement).toBeInTheDocument()

    fireEvent.click(nextRoundButton)

    expect(mockHandleResetGame).toHaveBeenCalledTimes(1)
    expect(mockHandleResetGameFinished).not.toHaveBeenCalled()
  })

  test('should render the winner modal with confetti animation', () => {
    const winner = [{ id: 1, name: 'Player 1' }]

    const { getByTestId } = render(
      <WinnerModal
        open={true}
        winner={winner}
        handleResetGame={() => {}}
        gameWinner={true}
        handleResetGameFinished={() => {}}
        handleClickWordButton={() => {}}
        currentWord='Word'
        players={[{ id: 1, name: 'Player 1', leader: true }]}
        roomId='123'
      />
    )

    const confettiMock = getByTestId('confetti-mock')
    expect(confettiMock).toBeInTheDocument()
  })

  test('should not render the winner modal when open is false', () => {
    const mockHandleResetGame = jest.fn()
    const mockHandleResetGameFinished = jest.fn()
    const mockHandleClickWordButton = jest.fn()

    const winner = [{ id: 1, name: 'Player 1' }]
    const currentWord = 'example'
    const players = [{ id: 1, name: 'Player 1', leader: true }]

    const { queryByText } = render(
      <WinnerModal
        open={false}
        winner={winner}
        handleResetGame={mockHandleResetGame}
        gameWinner={false}
        handleResetGameFinished={mockHandleResetGameFinished}
        handleClickWordButton={mockHandleClickWordButton}
        currentWord={currentWord}
        players={players}
        roomId='room123'
      />
    )

    const modalTitle = queryByText('Corno vencedor da rodada:')
    const winnerName = queryByText('Player 1')
    const nextRoundButton = queryByText('Próxima rodada')
    const currentWordElement = queryByText('Próxima palavra sorteada:')

    expect(modalTitle).not.toBeInTheDocument()
    expect(winnerName).not.toBeInTheDocument()
    expect(nextRoundButton).not.toBeInTheDocument()
    expect(currentWordElement).not.toBeInTheDocument()
  })
})
