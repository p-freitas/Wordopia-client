import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ModalPlayerName from './index';

describe('ModalPlayerName', () => {
  test('should call handlePlayerNameSubmit when confirm button is clicked', () => {
    const mockHandlePlayerNameSubmit = jest.fn();
    const mockHandlePlayerNameChange = jest.fn();
    const playerName = 'John Doe';

    const { getByText, getByTestId } = render(
      <ModalPlayerName
        open={true}
        setOpen={jest.fn()}
        handlePlayerNameSubmit={mockHandlePlayerNameSubmit}
        handlePlayerNameChange={mockHandlePlayerNameChange}
        playerName={playerName}
      />
    );

    const confirmButton = getByText('Confirmar');
    fireEvent.click(confirmButton);

    expect(mockHandlePlayerNameSubmit).toHaveBeenCalledTimes(1);
    expect(mockHandlePlayerNameSubmit).toHaveBeenCalledWith({
      playerName: playerName,
      id: expect.any(String),
    });
  });

  test('should call handlePlayerNameSubmit when Enter key is pressed', () => {
    const mockHandlePlayerNameSubmit = jest.fn();
    const mockHandlePlayerNameChange = jest.fn();
    const playerName = 'John Doe';

    const { getByTestId } = render(
      <ModalPlayerName
        open={true}
        setOpen={jest.fn()}
        handlePlayerNameSubmit={mockHandlePlayerNameSubmit}
        handlePlayerNameChange={mockHandlePlayerNameChange}
        playerName={playerName}
      />
    );

    const modal = getByTestId('modal-testid');
    fireEvent.keyDown(modal, { code: 'Enter' });

    expect(mockHandlePlayerNameSubmit).toHaveBeenCalledTimes(1);
    expect(mockHandlePlayerNameSubmit).toHaveBeenCalledWith({
      playerName: playerName,
      id: expect.any(String),
    });
  });
});
