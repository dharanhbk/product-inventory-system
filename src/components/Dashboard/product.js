import React from "react";
import Edit from "./edit";
import { Link } from "react-router-dom";



class Product extends React.Component{
    render(){
        return(
            
            <div style={{marginLeft:"500px"}}>
                
                <table>
                  <tr>
                    <th>Image</th>
                    <th>Product name</th>
                    <th>Product Id</th>
                    <th>Qty. in stock</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Actions</th>
                    <br></br>
            <button style={{marginLeft:"600px"}}><Link to ='/Edit'>Edit</Link></button>
                  </tr>
                </table>

            </div>
        );
    }
}

export default Product;