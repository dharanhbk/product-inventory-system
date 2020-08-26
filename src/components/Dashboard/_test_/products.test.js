import React from 'react';
import ReactDOM from 'react-dom'
import {MemoryRouter as Router} from 'react-router-dom'
import {configure,shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import '@testing-library/jest-dom/extend-expect'
import  Product from '../product'

configure({adapter:new Adapter()});


describe("all test for Products component", ()=>{
    it('renders the Products component without crashing!', ()=>{
      const div = document.createElement('div')
      ReactDOM.render(<Router><Product></Product></Router>, div)
    })
  })

  test('should test Products component with default state of empty array', () => {
    const wrapper = shallow(<Product product={[]} />);
    expect(wrapper).toMatchSnapshot();
   });