import React from 'react'
import { mount, render } from 'enzyme'
import Layout from '../Layout'

test('hello world', () => {
  const wrapper = mount(<Layout />)
  expect(wrapper.text()).toMatch("I'm here to stay (Footer)")
})

it('renders correctly', () => {
  const tree = render(<Layout />)
  expect(tree).toMatchSnapshot()
})
