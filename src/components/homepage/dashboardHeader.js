import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/logo.png";
import './homepage.css'

class DashboardHeader extends React.Component{




    
    render(){
        return(
            <div className="borderHead" style={{marginTop:"-40px"}}>
            <img src={logo} alt ="Logo" className="logo" />
            <p className="login"><Link to="/login" style={{textDecoration:"none"}}>Logout </Link></p>
            <p className="signup"><Link to="/dashboard" style={{textDecoration:"none"}}>Home</Link></p>
            {/* <p className="login"><Link to="/table" style={{textDecoration:"none"}}>Table </Link></p> */}
            <p className="header">PRODUCT INVENTORY SYSTEM</p>
        </div>
        );
    }
}

export default DashboardHeader;