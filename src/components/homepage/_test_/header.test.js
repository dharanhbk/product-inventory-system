import React from 'react';
import {MemoryRouter as Router} from 'react-router-dom'
import { shallow,configure } from 'enzyme';
import {render} from '@testing-library/react'
import Header from '../header';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect'

configure({adapter:new Adapter()});

test('should test Header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
   });

   it('check Register', ()=>{
    const {getByTestId} = render(<Router><Header ></Header></Router>)
    expect(getByTestId('Register')).toHaveTextContent('Register')
})


it('check Login', ()=>{
    const {getByTestId} = render(<Router><Header ></Header></Router>)
    expect(getByTestId('Login')).toHaveTextContent('Login')
})