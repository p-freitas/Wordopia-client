import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ModalTutorial from './index';

describe('ModalTutorial', () => {
  test('should call setOpen with false when close button is clicked', () => {
    const mockSetOpen = jest.fn();

    const { getByLabelText } = render(
      <ModalTutorial open={true} setOpen={mockSetOpen} />
    );

    const closeButton = getByLabelText('Mute audio');
    fireEvent.click(closeButton);

    expect(mockSetOpen).toHaveBeenCalledTimes(1);
    expect(mockSetOpen).toHaveBeenCalledWith(false);
  });
});
