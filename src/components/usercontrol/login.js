import React from "react";
import {Link} from "react-router-dom";

class Login extends React.Component{
    render(){
        return(
            <div>
            <h1 style={{textAlign:"center", marginTop:"-80px"}}> User Login here</h1>
            <br></br>
            <button style={{marginLeft:"600px",marginTop:"100px"}}><Link to ='/dashboard'>Login</Link></button>
            </div>
        );
    }
}

export default Login;