import React from "react";
import './user.css'
import { Link } from "react-router-dom";

class Login extends React.Component{
    render(){
        return(
    <div className="loginForm">
        <form>
            <fieldset>

                <h2 style={{textAlign: "center",fontFamily:" Georgia, 'Times New Roman', Times, serif",color:"rgb(80, 80, 116)"}}>Login </h2>
                <label >E-Mail ID:</label>
                <input type="text" />
                <br></br>
                <br></br>
                <label >Password:&nbsp;</label>
                <input type="alphaNumeric" />
                <br></br>
                <br></br>
                <input type="checkbox"  /> Remember me &nbsp; 
                <span style={{fontSize:"15px"}} >Forget password?</span>  
                <br></br>
                <br></br>
                <button type="submit"  className="submit"><Link to="/dashboard" style={{textDecoration:"none",color:"white"}}>Login</Link></button>
                <br></br>
                <span style={{fontSize: "17px;"}}>First time user? </span><span style={{fontSize: "17px", textDecoration: "underline" }}>Create an account</span>

            </fieldset>
        </form>
    </div>
        );
    }
}

export default Login;