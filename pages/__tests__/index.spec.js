import Home from 'pages/index'
import { render } from '@testing-library/react'

jest.mock('Components/App', () => () => <div>App</div>)

describe('<Home />', () => {
  it('renders', () => {
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot()
  })
})
