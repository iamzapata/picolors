import { render } from '@testing-library/react'
import App from 'Components/App'

jest.mock('Components/Header', () => () => <div>Header</div>)
jest.mock('Components/Header', () => () => <div>Canvas</div>)
jest.mock('Components/PiDigitCount', () => () => <div>PiDigitCount</div>)
jest.mock('Components/ColorSelector', () => () => <div>ColorSelector</div>)
jest.mock('Components/PaletteSelector', () => () => <div>PaletteSelector</div>)

describe('<App />', () => {
  it('renders', () => {
    const { container } = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
