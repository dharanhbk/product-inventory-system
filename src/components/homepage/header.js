import React from "react";
import {Link} from "react-router-dom";


class Header extends React.Component{
    render(){
        return(
            <div>
            <h1 style={{textAlign:"center"}}>Header Component</h1>
            <div style={{textAlign:"center"}}> 
            <Link to="/login">Login</Link> &nbsp;
            <Link to="/signup">Sign Up</Link>
            </div>
            </div>
        );
    }
}

export default Header;