import React from "react";
import Login from '../usercontrol/login'
import Header from "./header";

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
            <p style={{textAlign:"center" , marginTop:"100px"}}> </p>
            <Login> </Login>
            </div>
        )
    }
}

export default HomePage;