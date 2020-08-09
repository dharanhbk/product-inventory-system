import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Header from "../homepage/header";


class SignUp extends React.Component{


    constructor(props){
        super(props)
        this.state ={
            fullname:'',
            email:'',
            password:'',
            nameError:'*Must contain min 4 characters',
            emailError:'*Enter valid email id',
            passwordError:'*Must contain min 8 characters'
                }
    }
    checkNameValidation=()=>{
        let nameerror = ''
        if(this.state.fullname.length<3){
            nameerror ="*Must contain min 4 characters"
            this.setState({nameError:nameerror,buttonStatus:true})
        }
        else{
            this.setState({nameError:nameerror,
            buttonStatus:false})
        }
        }
        
    
    checkEmailValidation=()=>{
        let emailerror=''
        if(!this.state.email.includes("@"&&".co")){
            emailerror ="*Enter valid email id"
            this.setState({emailError:emailerror,buttonStatus:true})
        }
        else{
            this.setState({emailError:emailerror,buttonStatus:false})
        }
    }

    checkPasswordValidation=()=>{
        let passerror = ''
        if(this.state.password.length<4){
            passerror ="*Must contain min 5 characters"
            this.setState({passwordError:passerror,buttonStatus:true})
        }
        else{
            this.setState({passwordError:passerror,buttonStatus:false})
        }
        }

    getName=(e)=>{
        this.checkNameValidation()
        this.setState({fullname:e.target.value})
        this.checkNameValidation()
    }
    getEmail=(e)=>{
        this.checkEmailValidation()
        this.setState({email:e.target.value})
        this.checkEmailValidation()
    }
    getPassword=(e)=>{
        this.checkPasswordValidation()
        this.setState({password:e.target.value})
        this.checkPasswordValidation()
    }
    btnstatus=()=>{
        console.log("button status")
        let frndreqbody =  {
            "name":this.state.fullname,
            "email":this.state.email,
            "password":this.state.password
          }
        if(this.state.nameError===''&&this.state.emailError===''&&this.state.passwordError==='' ){

            Axios.post('http://localhost:3000/register', frndreqbody)
                .then(response=>{
                    console.log(response);
                     
                }, error=>{
                    console.error(error);
                })
                this.props.history.push('/login')
                alert("Succesfully registered")
        }
        else{
            alert("Enter valid details")
        }
    }

    render(){
        return(
            <div>
            <Header></Header>
            <div className="signupForm">
            <form>
                <fieldset>
    
                    <h2 style={{textAlign:" center",fontFamily: "Georgia, 'Times New Roman', Times, serif",color:"rgb(80, 80, 116)"}}>Sign Up </h2>
                    <label >Full Name: </label>
                    <input type="text" onChange={this.getName} />&nbsp;
                    <span style={{color:"red",fontSize:"12px"}}>{this.state.nameError}</span>
                    <br></br>
                    <br></br>
                    <label >E-mail: </label>
                    <input type="text"  onChange={this.getEmail}/>&nbsp;
                    <span style={{color:"red",fontSize:"12px"}}>{this.state.emailError}</span>
                    <br></br>
                    <br></br>
                    <label >Password:&nbsp;</label>
                    <input type="password" onChange={this.getPassword} />&nbsp;
                    <span style={{color:"red",fontSize:"12px"}}>{this.state.passwordError}</span>
                    <br></br>
                    <br></br>
                    <button type="submit"  className="submit"  onClick={this.btnstatus}>SignUp</button>
                    <br></br>
                    <span style={{fontSize:"17px"}}>Already have an account? </span><span style={{fontSize: "17px", textDecoration:" underline"}} >Login</span>
    
                </fieldset>
            </form>
        </div>
        </div>
        );
    }
}

export default SignUp;