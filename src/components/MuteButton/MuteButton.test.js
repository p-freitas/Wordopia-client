import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MuteButton from './index';

describe('MuteButton', () => {
  test('should toggle isMuted state when button is clicked', () => {
    const mockSetIsMuted = jest.fn();
    const isMuted = false;

    const { getByLabelText } = render(
      <MuteButton setIsMuted={mockSetIsMuted} isMuted={isMuted} />
    );

    const muteButton = getByLabelText('Mute audio');
    fireEvent.click(muteButton);

    expect(mockSetIsMuted).toHaveBeenCalledTimes(1);
    expect(mockSetIsMuted).toHaveBeenCalledWith(true);
  });
});
