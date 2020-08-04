import React from "react";
import Product from "./product";
import Stock from "./stock";
import { Link } from "react-router-dom";




class NavBar extends React.Component{
    render(){
        return(
            <div>
            <div className="dashBoard">
    <span style={{fontSize: "25px",color: "rgb(182, 133, 41)"}}>Search for a product:</span>
    <input type="text" placeholder="Search Product" name="search" style={{fontSize: "25px "}} />
    <button type="submit" style={{fontSize: "25px "}}>Search</button>

    {/* <i className="fa fa-filter" style={{fontSize: "30px ",marginLeft: "100px"}}  > Filter Product</i> */}

    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" style={{marginLeft: "300px"}}>
        <Link to="/add-new" style={{textDecoration:"none",color:"black"}}>Add new item </Link></button>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" style={{marginLeft: "200px"}}>Add new Category</button>
    
      
    
</div>
<br></br>
<br></br>  
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