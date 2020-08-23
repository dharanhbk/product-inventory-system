import React from "react";
import './user.css'
import { Link } from "react-router-dom";
import Axios from "axios";
import {withRouter} from "react-router-dom"

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            loginError:""
        }
    }

    login= async() =>{
        console.log('user login clicked.....')
         const data= await Axios.get('http://localhost:3000/register?email='+ this.state.email);
         console.log(data);
          if(data.data.length !== 0){
             if(this.state.password == data.data[0].password){
                this.props.history.push("/dashboard")
             }
             else{
                 this.setState({loginError:"*Enter valid details"})
             }
             }
             else{
                this.setState({loginError:"*Enter valid details"})
                console.log("invalid user....")
                this.props.history.push("/login")
         }
             
        }  
        getEmail=(event)=>{
            this.setState({email:event.target.value})
        }
        getPassword=(event)=>{
            this.setState({password:event.target.value})
        }
    render(){
        return(
            
    <div className="loginForm">
        <form >
            <fieldset>

                <h2 style={{textAlign: "center",fontFamily:" Georgia, 'Times New Roman', Times, serif",color:"rgb(80, 80, 116)"}}>Login </h2>
                <label >E-Mail ID:&nbsp;</label><br></br>
                <input type="text" onChange={this.getEmail}/>
                
                <br></br>
                <label >Password:&nbsp;</label><br></br>
                <input type="password" onChange={this.getPassword}/>
                <br></br>
                <span style={{fontSize:"15px",color:"red"}}>{this.state.loginError}</span>
                <br></br>
                <input type="checkbox"  /> Remember me &nbsp; 
                <span style={{fontSize:"15px"}} >Forget password?</span>  
                <br></br>
                <br></br>
                <button type="submit" onClick={this.login}  className="submit">Login</button>
                <br></br>
                <span style={{fontSize: "17px"}}>First time user? </span><span style={{fontSize: "17px", textDecoration: "underline" }}>
                    <Link to="/signup">Create an account</Link></span>

            </fieldset>
        </form>
    </div>
        );
    }
}

export default withRouter(Login);