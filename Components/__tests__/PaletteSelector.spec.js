import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PaletteSelector from 'Components/PaletteSelector'

describe('PaletteSelector', () => {
  it('renders', () => {
    const handlePaletteSelectChange = jest.fn()
    const colorPalettes = [{ type: 'regular' }, { type: 'pastel' }]
    const { container } = render(
      <PaletteSelector
        handlePaletteSelectChange={handlePaletteSelectChange}
        colorPalettes={colorPalettes}
      />,
    )
    expect(container).toMatchSnapshot()

    userEvent.selectOptions(screen.getByTestId('palette-selector'), 'regular')

    expect(handlePaletteSelectChange).toHaveBeenCalledTimes(1)
    expect(container.querySelectorAll('option')[0].selected).toBe(true)

    userEvent.selectOptions(screen.getByTestId('palette-selector'), 'pastel')

    expect(handlePaletteSelectChange).toHaveBeenCalledTimes(2)
    expect(container.querySelectorAll('option')[1].selected).toBe(true)
  })
})
