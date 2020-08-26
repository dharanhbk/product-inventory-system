import React from 'react';
import ReactDOM from 'react-dom'
import {MemoryRouter as Router} from 'react-router-dom'
import { render,cleanup  } from '@testing-library/react';
import { mount, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import '@testing-library/jest-dom/extend-expect'
import SignUp from '../signUp'

configure({adapter:new Adapter()});

describe("all test for user component", ()=>{
    it('renders the SignUp component without crashing!', ()=>{
      const div = document.createElement('div')
      ReactDOM.render(<Router><SignUp></SignUp></Router>, div)
    })
    
  
  })

it('check if button renders in correct way', ()=>{
    const {getByTestId} = render(<Router><SignUp label='signup'></SignUp></Router>)
    expect(getByTestId('signupbutton')).toHaveTextContent('SignUp')
})
