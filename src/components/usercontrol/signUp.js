import React from "react";
import { Link } from "react-router-dom";


class SignUp extends React.Component{
    render(){
        return(
            <div>
            <h1 style={{textAlign:"center"}}> New User Sign Up page</h1>
            <br></br>
            <button style={{marginLeft:"600px",marginTop:"100px"}}><Link to ='/dashboard'>SignUp</Link></button>
            </div>
        );
    }
}

export default SignUp;