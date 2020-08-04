import React from "react";
import { Link } from "react-router-dom";


class SignUp extends React.Component{
    render(){
        return(
            <div className="loginForm">
            <form>
                <fieldset>
    
                    <h2 style={{textAlign:" center",fontFamily: "Georgia, 'Times New Roman', Times, serif",color:"rgb(80, 80, 116);"}}>Sign Up </h2>
                    <label >First Name: </label>
                    <input type="text" />
                    <br></br>
                    <br></br>
                    <label >Last Name: </label>
                    <input type="text" />
                    <br></br>
                    <br></br>
                    <label >Password:&nbsp;</label>
                    <input type="text" />
                    <br></br>
                    <br></br>
                    <label > Re-enter:&nbsp;</label>
                    <input type="text" />
                    <br></br>
                    <br></br>
                    
                    <button type="submit"  className="submit"><Link to='/dashboard' style={{textDecoration:"none",color:"black"}}>SignUp</Link></button>
                    <br></br>
                    <span style={{fontSize:"17px"}}>Already have an account? </span><span style={{fontSize: "17px", textDecoration:" underline"}} >Login</span>
    
                </fieldset>
            </form>
        </div>
        );
    }
}

export default SignUp;