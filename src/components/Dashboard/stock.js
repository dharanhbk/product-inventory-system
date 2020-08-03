import React from 'react'
import bargraph from '../images/bargraph.png';


class Stock extends React.Component{
    render(){
        return(
            <div>
            <h1 style={{textAlign:"center"}}> Stock details:</h1>
            <img src={bargraph}></img>
            </div>
        );
    }
}

export default Stock;