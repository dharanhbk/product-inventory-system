import React from "react";
import Product from "./product";
import Stock from "./stock";

import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import axios from "axios"


class NavBar extends React.Component{

    // addNewItem=()=>{
    //     this.props.history.push('/add-new')
    // }
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
            <div className="dashBoard">
                <span style={{fontSize: "25px",color: "rgb(182, 133, 41)",marginLeft:"20px"}}>Search for a product:</span>
                <input type="text" placeholder="Search Product" name="search" style={{fontSize: "25px "}} />
                <button type="submit" style={{fontSize: "25px "}}>Search</button>

                <i className="fa fa-filter" style={{fontSize: "30px ",marginLeft: "100px"}}  > Filter Product</i>

               <Link to="/add-new"><button type="button"  style={{marginLeft: "100px"}}>Add new item </button></Link>
                {/* <button type="button" style={{marginLeft: "50px"}}>Add new Category</button> */}
    
            </div>
            <br></br>
            <br></br>  
            <Product />
            <br></br>
            <hr></hr>
            <br></br>
            {/* <Stock/> */}
            </div>
        );
    }
}

export default NavBar;