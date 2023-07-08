import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import socket from '../../socket'
import { MemoryRouter } from 'react-router-dom'
import * as Snackbar from 'react-simple-snackbar'

import Home from './index'

jest.mock('../../socket', () => ({
  on: jest.fn(),
  emit: jest.fn(),
}))

describe('Home component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders the component', () => {
    expect(screen.getByText('WORDOPIA')).toBeInTheDocument()
  })

  test('handles click on letter', () => {
    const letterButton = screen.getByText('A')
    userEvent.click(letterButton)
    expect(socket.emit).toHaveBeenCalledWith('letter', expect.any(Object))
  })

  test('handles player name submission', () => {
    const playerNameInput = screen.getByLabelText('Player Name')
    const submitButton = screen.getByText('Submit')
    userEvent.type(playerNameInput, 'John Doe')
    userEvent.click(submitButton)
    expect(socket.emit).toHaveBeenCalledWith(
      'playerName',
      expect.any(Object),
      expect.any(String)
    )
  })

  test('handles click on word button', () => {
    const wordButton = screen.getByText('Gerar novo tema')
    userEvent.click(wordButton)
    expect(socket.emit).toHaveBeenCalledWith(
      'wordsButtonClick',
      expect.any(String)
    )
    expect(socket.emit).toHaveBeenCalledWith('getWord', expect.any(String))
  })

  test('handles start timer', () => {
    const timerButton = screen.getByLabelText('Start Timer')
    userEvent.click(timerButton)
    expect(socket.emit).toHaveBeenCalledWith('startTimer', expect.any(String))
    expect(socket.emit).toHaveBeenCalledWith(
      'cleanCurrentLetter',
      expect.any(String)
    )
    expect(socket.emit).toHaveBeenCalledWith(
      'changeTurnPlayer',
      expect.any(String)
    )
  })

  test('handles reset game', () => {
    const resetGameButton = screen.getByText('Reset Game')
    userEvent.click(resetGameButton)
    expect(socket.emit).toHaveBeenCalledWith('resetGame', expect.any(String))
    expect(screen.queryByTestId('winner-modal')).not.toBeInTheDocument()
  })

  test('handles reset game finished', () => {
    const resetGameFinishedButton = screen.getByText('Reset Game (Finished)')
    userEvent.click(resetGameFinishedButton)
    expect(socket.emit).toHaveBeenCalledWith('gameFinished', expect.any(String))
    expect(screen.queryByTestId('winner-modal')).not.toBeInTheDocument()
  })

  test('handles remove player click', () => {
    const removePlayerButton = screen.getByText('Eliminar jogador')
    userEvent.click(removePlayerButton)
    expect(screen.getByTestId('modal-remove-player')).toBeInTheDocument()
  })

  test('handles reset all game', () => {
    const resetAllGameButton = screen.getByText('Reset All Game')
    userEvent.click(resetAllGameButton)
    expect(socket.emit).toHaveBeenCalledWith('resetGameAll')
    expect(screen.queryByTestId('reset-modal')).not.toBeInTheDocument()
  })

  // Add more tests as needed
})
