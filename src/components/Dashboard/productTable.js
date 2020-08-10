import React from 'react';
import { Link } from 'react-router-dom';
import './cards.css'

class ProductTable extends React.Component {
    
constructor(props){
    super(props)
}
    deleteProduct=()=>{
        this.props.deleteId(this.props.id)
    }

     editProduct=()=>{
        this.props.editId(this.props.id)
    }



    render() { 
        return (
            <tr>
                 <td><img src={"images/" + this.props.prodImage} style={{width:"100px",height:"125px"}}></img></td>
                 <td>{this.props.id}</td>
                 <td>{this.props.name}</td>
                 <td>{this.props.quantity}</td>
                 <td>{this.props.price}</td>
                 <td>{this.props.category}</td>
                 <td style={{textAlign:"center"}}><button onClick={this.editProduct} className="button3">Edit</button></td>
                 <td style={{textAlign:"center"}} ><button onClick={this.deleteProduct} className="button4">Delete</button></td> 
            </tr>
          );
    }
}
 
export default ProductTable;