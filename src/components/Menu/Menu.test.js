import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Menu />)
})

describe('Menu', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})