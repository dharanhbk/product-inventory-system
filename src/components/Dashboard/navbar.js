import React from "react";
import Product from "./product";
import Stock from "./stock";



class NavBar extends React.Component{
    render(){
        return(
            <div style={{textAlign:"center", display:"inline"}}>
            <p>Search</p>
            <p>Filter</p>
            <p>Add new</p>
            <hr></hr>
            <h1>Product details</h1>
            <Product />
            <br></br>
            <hr></hr>
            <br></br>
            <Stock/>
            </div>
        );
    }
}

export default NavBar;