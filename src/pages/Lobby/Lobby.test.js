import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { useNavigate } from 'react-router-dom'
import io from 'socket.io-client'
import Lobby from './index'

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}))

jest.mock('socket.io-client', () => ({
  __esModule: true,
  default: jest.fn(),
}))

describe('Lobby component', () => {
  let mockNavigate
  let mockSocketRef
  let mockSocketOn

  beforeEach(() => {
    mockNavigate = jest.fn()
    useNavigate.mockReturnValue(mockNavigate)

    mockSocketRef = {
      current: {
        emit: jest.fn(),
        disconnect: jest.fn(),
        on: jest.fn(),
      },
    }
    io.mockReturnValue(mockSocketRef)

    mockSocketOn = jest.fn()
    mockSocketRef.current.on.mockImplementation(mockSocketOn)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders Lobby component', () => {
    render(<Lobby />)
    // Assert the presence of relevant elements on the rendered component
    expect(screen.getByText('WORDOPIA')).toBeInTheDocument()
    expect(screen.getByText('CRIAR SALA')).toBeInTheDocument()
    expect(screen.getByText('ou')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Digite o código da sala')
    ).toBeInTheDocument()
    expect(screen.getByText('ENTRAR NA SALA')).toBeInTheDocument()
  })

  test('handles create room button click', () => {
    render(<Lobby />)
    const createRoomButton = screen.getByText('CRIAR SALA')
    fireEvent.click(createRoomButton)

    // Assert that the socket emits 'createRoom' event when the button is clicked
    expect(mockSocketRef.current.emit).toHaveBeenCalledWith('createRoom')
  })

  test('handles join room button click', () => {
    render(<Lobby />)
    const roomIdInput = screen.getByPlaceholderText('Digite o código da sala')
    const joinRoomButton = screen.getByText('ENTRAR NA SALA')

    fireEvent.change(roomIdInput, { target: { value: '1234' } })
    fireEvent.click(joinRoomButton)

    // Assert that the navigate function is called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith('/room/1234')
  })

  test('handles roomCreated event', () => {
    render(<Lobby />)
    const mockRoomId = 'abcd'

    // Simulate the 'roomCreated' event by calling the callback passed to socket.on()
    mockSocketOn.mock.calls[0][1](mockRoomId)

    // Assert that the navigate function is called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith('/room/abcd')
  })
})
