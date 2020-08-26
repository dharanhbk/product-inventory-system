import React from 'react';
import ReactDOM from 'react-dom'
import { render  } from '@testing-library/react';
import {MemoryRouter as Router} from 'react-router-dom'
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import '@testing-library/jest-dom/extend-expect'
import DashboardHeader from '../dashboardHeader';


configure({adapter:new Adapter()});


describe("all test for dashboard header component", ()=>{
    it('renders the Products component without crashing!', ()=>{
      const div = document.createElement('div')
      ReactDOM.render(<Router><DashboardHeader></DashboardHeader></Router>, div)
    })
  })

  it('check Logout', ()=>{
    const {getByTestId} = render(<Router><DashboardHeader></DashboardHeader></Router>)
    expect(getByTestId('Logout')).toHaveTextContent('Logout')
})


it('check Home', ()=>{
    const {getByTestId} = render(<Router><DashboardHeader></DashboardHeader></Router>)
    expect(getByTestId('Home')).toHaveTextContent('Home')
})