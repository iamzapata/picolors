import { render } from '@testing-library/react'
import PiDigitCount from 'Components/PiDigitCount'

describe('<PiDigitCount/>', () => {
  it('renders', () => {
    const { container } = render(<PiDigitCount />)
    expect(container).toMatchSnapshot()
  })
})
