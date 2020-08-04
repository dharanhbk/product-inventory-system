import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/logo.png";
import './homepage.css'

class Header extends React.Component{
    render(){
        return(
            <div className="borderHead">
            <img src={logo} alt ="Logo" style={{marginLeft:"10px"}} />
            <p className="signup"><Link to="/signup" style={{textDecoration:"none"}}>Sign Up </Link></p>
            <p className="login"><Link to="/login" style={{textDecoration:"none"}}>Login </Link></p>
            <p className="login"><Link to="/table" style={{textDecoration:"none"}}>Table </Link></p>
            <p className="header">PRODUCT INVENTORY SYSTEM</p>
        </div>
        );
    }
}

export default Header;