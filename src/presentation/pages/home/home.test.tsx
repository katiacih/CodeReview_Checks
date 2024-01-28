import React from 'react'
import { render } from '@testing-library/react'
import Home from './home'
import '@testing-library/jest-dom'

/**
 * @jest-environment jsdom
 */

describe('home', () => {
  test('should render home', () => {
    const { getByText } = render(<Home />)
    expect(getByText(/Comece por aqui/)).toBeVisible()
  })
})
