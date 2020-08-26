import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/logo.png";
import './homepage.css'

class Header extends React.Component{




    
    render(){
        return(
            <div className="borderHead">
            <img src={logo} alt ="Logo"className="logo"  />
            <p className="signup" data-testid="Register"><Link to="/signup" style={{textDecoration:"none"}}>Register</Link></p>
            <p className="login" data-testid="Login"><Link to="/login" style={{textDecoration:"none"}}>Login </Link></p>
            {/* <p className="login"><Link to="/table" style={{textDecoration:"none"}}>Table </Link></p> */}
            <p className="header">PRODUCT INVENTORY SYSTEM</p>
        </div>
        );
    }
}

export default Header;