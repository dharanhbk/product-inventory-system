import React from 'react';
import ReactDOM from 'react-dom'
import {MemoryRouter as Router} from 'react-router-dom'
import { render,cleanup, fireEvent  } from '@testing-library/react';
import { mount, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import '@testing-library/jest-dom/extend-expect'
import  Product from '../product'

configure({adapter:new Adapter()});


describe("all test for Add new component", ()=>{
    it('renders the Add new component without crashing!', ()=>{
      const div = document.createElement('div')
      ReactDOM.render(<Router><Product></Product></Router>, div)
    })
  })