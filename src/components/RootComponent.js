import React from "react";
import HomePage from './homepage/homepage';
import Routing from "./routing";




class RootComponent extends React.Component{

    render(){

        return (
            <div >
               <Routing></Routing> 
            </div>
        )
    }
}

export default RootComponent;