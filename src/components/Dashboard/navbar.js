import React from "react";
import Product from "./product";
import Stock from "./stock";

import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import axios from "axios"
import DashboardHeader from "../homepage/dashboardHeader";


class NavBar extends React.Component{

    constructor(props){
        super(props)
        this.state={
            products:[],
            
        }
    }

            componentWillMount(){
                        this.getBlogs()
            }

            getBlogs=()=>{
            axios.get('http://localhost:3000/products')

                        .then((response)=>{

                            console.log(response)

                            console.log(response.data)

                            this.setState({products: response.data})

                            console.log(this.state.products)

                        }, (error)=>{

                            console.log(error)
 
                        })
                    }


                  

    render(){
        return(
            <div>
            <DashboardHeader></DashboardHeader>
            <br></br>
            <br></br>  
            <Product />
            <br></br>
            
            <br></br>
           
            </div>
        );
    }
}

export default NavBar;