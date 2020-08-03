import React from "react";
import NavBar from "./navbar";


class DashBoard extends React.Component{
    render(){
        return(
            <div>
            <h1 style={{textAlign:"center"}}> Product Inventory page</h1>
            <NavBar />
            </div>
        );
    }
}

export default DashBoard;