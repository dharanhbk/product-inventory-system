import React from 'react';
import ReactDOM from 'react-dom'
import { render  } from '@testing-library/react';
import {MemoryRouter as Router} from 'react-router-dom'
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import '@testing-library/jest-dom/extend-expect'
import Cards from '../cards';


configure({adapter:new Adapter()});


describe("all test for Products component", ()=>{
    it('renders the Products component without crashing!', ()=>{
      const div = document.createElement('div')
      ReactDOM.render(<Router><Cards></Cards></Router>, div)
    })
  })
  it('check if button renders in correct way', ()=>{
    const {getByTestId} = render(<Router><Cards label='edit'/></Router>)
    expect(getByTestId('editbutton')).toHaveTextContent('Edit')
})