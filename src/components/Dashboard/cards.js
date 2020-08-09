import React from 'react';
import './cards.css'

class Cards extends React.Component {
    
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
            // <tr>
            //      <td><img src={"images/" + this.props.prodImage} style={{width:"100px",height:"125px"}}></img></td>
            //      <td>{this.props.id}</td>
            //      <td>{this.props.name}</td>
            //      <td>{this.props.quantity}</td>
            //      <td>{this.props.price}</td>
            //      <td>{this.props.category}</td>
            //      <td style={{textAlign:"center"}}><button onClick={this.editProduct}>Edit</button></td>
            //      <td style={{textAlign:"center"}} ><button onClick={this.deleteProduct}>Delete</button></td> 
            // </tr>
            <div className="column">
            <div className="card">
              <img src={"images/" + this.props.prodImage} style={{width:"200px",height:"205px",marginLeft:"200px"}}></img>
              <div style={{float:"left",marginTop:"-200px"}}>
              <h3>{this.props.name}</h3>
              <p>Quantity: {this.props.quantity}</p>
              <p>Price: ${this.props.price}</p>
              <p>Category: {this.props.category}</p>
              <p ><button onClick={this.editProduct}>Edit</button>&nbsp;
              <button onClick={this.deleteProduct}>Delete</button></p>
              </div>
            </div>
          </div>
          );
    }
}
 
export default Cards;