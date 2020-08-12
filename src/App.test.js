import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders correctly', () => {
  expect(shallow(<App />)).toMatchSnapshot();
})
