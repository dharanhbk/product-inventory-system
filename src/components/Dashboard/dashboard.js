import React from "react";
import NavBar from "./navbar";


class DashBoard extends React.Component{
    render(){
        return(
            <div>
            <h1 style={{marginTop:"50px"}}></h1>
            <NavBar />
            </div>
        );
    }
}

export default DashBoard;