import React from 'react';
import { render } from '@testing-library/react';
import PlayersList from './index';

describe('PlayersList', () => {
  test('should fetch and render player data correctly', () => {
    const mockSetPlayers = jest.fn();
    const mockSocket = {
      on: jest.fn(),
      emit: jest.fn(),
    };

    const roomId = 'room123';

    const players = [
      { id: 1, name: 'Player 1', score: 10 },
      { id: 2, name: 'Player 2', score: 5 },
    ];

    render(
      <PlayersList
        currentTurn={null}
        playersOut={[]}
        setPlayersOut={jest.fn()}
        currentLetter={null}
        players={players}
        setPlayers={mockSetPlayers}
        roomId={roomId}
        socket={mockSocket}
      />
    );

    expect(mockSocket.emit).toHaveBeenCalledTimes(1);
    expect(mockSocket.emit).toHaveBeenCalledWith('getPlayersName', roomId);

    expect(mockSocket.on).toHaveBeenCalledTimes(2);
    expect(mockSocket.on).toHaveBeenCalledWith('players', expect.any(Function));
    expect(mockSocket.on).toHaveBeenCalledWith('allPlayersNames', expect.any(Function));

    // expect(mockSetPlayers).toHaveBeenCalledTimes(2);
    // expect(mockSetPlayers).toHaveBeenCalledWith(players);
  });
});
