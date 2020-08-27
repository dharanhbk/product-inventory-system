import React from 'react';
import ReactDOM from 'react-dom'
import {MemoryRouter as Router} from 'react-router-dom'
import { render  } from '@testing-library/react';
import { mount, configure , shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import '@testing-library/jest-dom/extend-expect'
import AddNew from '../addNew';


configure({adapter:new Adapter()});

test('should test Addnewcomponent', () => {
  const wrapper = shallow(<AddNew />);
  expect(wrapper).toMatchSnapshot();
 });


describe("all test for Add new component", ()=>{
    it('renders the Add new component without crashing!', ()=>{
      const div = document.createElement('div')
      ReactDOM.render(<Router><AddNew></AddNew></Router>, div)
    })
  })

  it('check if button renders in correct way', ()=>{
    const {getByTestId} = render(<Router><AddNew></AddNew></Router>)
    expect(getByTestId('addnewbutton')).toHaveTextContent('Save Item')
})
it(" check product name", () => {
  const wrapper = mount(<input type="text" placeholder="Product name" />);
  const input = wrapper.find("input");
  expect(input.prop("type")).toEqual("text");
  expect(input.prop("placeholder")).toEqual("Product name" );
  expect(input).toHaveLength(1)
});
it(" check product quantity", () => {
  const wrapper = mount(<input type="text" placeholder="Quantity" />);
  const input = wrapper.find("input");
  expect(input.prop("type")).toEqual("text");
  expect(input.prop("placeholder")).toEqual("Quantity" );
  expect(input).toHaveLength(1)
});
