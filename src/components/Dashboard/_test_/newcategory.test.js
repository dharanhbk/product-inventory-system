import React from 'react';
import ReactDOM from 'react-dom'
import {MemoryRouter as Router} from 'react-router-dom'
import {configure,shallow,mount} from "enzyme";
import {render} from '@testing-library/react'
import Adapter from "enzyme-adapter-react-16";
import '@testing-library/jest-dom/extend-expect'
import NewCategory from '../newCategory';


configure({adapter:new Adapter()});


describe("all test for Products component", ()=>{
    it('renders the Products component without crashing!', ()=>{
      const div = document.createElement('div')
      ReactDOM.render(<Router><NewCategory></NewCategory></Router>, div)
    })
  })

  it('check if button renders in correct way', ()=>{
    const {getByTestId} = render(<Router><NewCategory label='Add Category'/></Router>)
    expect(getByTestId('addcategory')).toHaveTextContent('Add category')
})

it(" check new category", () => {
    const wrapper = mount(<input type="text" placeholder="New Category" />);
    const input = wrapper.find("input");
    expect(input.prop("type")).toEqual("text");
    expect(input.prop("placeholder")).toEqual("New Category" );
    expect(input).toHaveLength(1)
  });