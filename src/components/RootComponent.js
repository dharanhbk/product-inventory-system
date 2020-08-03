import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from './homepage/header';
import HomePage from './homepage/homepage';
import Footer from './homepage/footer';
import SignUp from "./usercontrol/signUp";
import DashBoard from "./Dashboard/dashboard";
import Edit from "./Dashboard/edit";



class RootComponent extends React.Component{

    render(){

        return (
            <div>
                
                <Header />
                <Switch>
                <Route exact path='/' component={HomePage}></Route> 
                <Route exact path='/login' component={HomePage}></Route> 
                <Route exact path='/signup' component={SignUp}></Route> 
                <Route exact path='/dashboard' component={DashBoard}></Route> 
                <Route exact path='/edit' component={Edit}></Route> 
                </Switch> 
               
                <Footer />
            </div>
        )
    }
}

export default RootComponent;