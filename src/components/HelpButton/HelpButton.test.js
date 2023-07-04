import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import HelpButton from './index'

describe('HelpButton', () => {
  test('should toggle the open state on button click', () => {
    const mockSetOpen = jest.fn()
    const mockOpen = false
    const { getByLabelText } = render(
      <HelpButton setOpen={mockSetOpen} open={mockOpen} />
    )

    // Click the button
    fireEvent.click(getByLabelText('Tutorial'))

    // Verify the setOpen function has been called with the opposite value of mockOpen
    expect(mockSetOpen).toHaveBeenCalledWith(!mockOpen)
  })
})
