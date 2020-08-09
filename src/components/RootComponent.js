import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from './homepage/header';
import HomePage from './homepage/homepage';
import Footer from './homepage/footer';
import SignUp from "./usercontrol/signUp";
import DashBoard from "./Dashboard/dashboard";
import Edit from "./Dashboard/edit";
import Addnew from "./Dashboard/addNew";
import TableEmp from "./Dashboard/table";
import Stock from "./Dashboard/stock";
import NewCategory from "./Dashboard/newCategory";



class RootComponent extends React.Component{

    render(){

        return (
            <div >
                
                {/* <Header /> */}
                <Switch>
                <Route exact path='/' component={HomePage}></Route> 
                <Route exact path='/login' component={HomePage}></Route> 
                <Route exact path='/signup' component={SignUp}></Route> 
                <Route exact path='/dashboard' component={DashBoard}></Route> 
                <Route exact path='/edit' component={Edit}></Route> 
                <Route exact path='/add-new' component={Addnew}></Route> 
                <Route exact path='/table' component={TableEmp}></Route> 
                <Route exact path='/stockdetails' component={Stock}></Route> 
                <Route exact path='/add-new-category' component={NewCategory}></Route> 
                </Switch> 
               
                <Footer />
            </div>
        )
    }
}

export default RootComponent;