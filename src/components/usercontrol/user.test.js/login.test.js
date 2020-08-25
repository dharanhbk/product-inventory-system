
import React from 'react';
import ReactDOM from 'react-dom'
import {MemoryRouter as Router} from 'react-router-dom'
import { render,cleanup  } from '@testing-library/react';
import { mount, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import '@testing-library/jest-dom/extend-expect'
import Login from '../login'

configure({adapter:new Adapter()});

describe("all test for user component", ()=>{
    it('renders the Login component without crashing!', ()=>{
      const div = document.createElement('div')
      ReactDOM.render(<Router><Login></Login></Router>, div)
    })
    
  
  })

it('check if button renders in correct way', ()=>{
    const {getByTestId} = render(<Router><Login label='login'></Login></Router>)
    expect(getByTestId('button')).toHaveTextContent('Login')
})

it(" check email address", () => {
  const wrapper = mount(<input type="text" placeholder="Enter Email" />);
  const input = wrapper.find("input");
  expect(input.prop("type")).toEqual("text");
  expect(input.prop("placeholder")).toEqual("Enter Email");
});

it(" check password", () => {
  const wrapper = mount(<input type="password" placeholder="Enter Password" />);
  const input = wrapper.find("input");
  expect(input.prop("type")).toEqual("password");
  expect(input.prop("placeholder")).toEqual("Enter Password");
  expect(input).toHaveLength(1)
});



