import React from 'react';

class ProductTable extends React.Component {
    

    deleteProduct=()=>{
        this.props.deleteId(this.props.id)
    }

     editProduct=()=>{
        this.props.editId(this.props.id)
    }



    render() { 
        return (
            <tr>
                             <td>{this.props.id}</td>
                            <td>{this.props.name}</td>
                            <td>{this.props.quantity}</td>
                            <td>{this.props.price}</td>
                            <td>{this.props.category}</td>
                            <td style={{textAlign:"center"}}><button onClick={this.editProduct}>Edit</button></td>
                            <td style={{textAlign:"center"}} ><button onClick={this.deleteProduct}>Delete</button></td> 
            </tr>
          );
    }
}
 
export default ProductTable;