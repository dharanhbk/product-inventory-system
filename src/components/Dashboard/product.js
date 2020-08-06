import React from 'react';

import axios from "axios";
import './table.css'
import ProductTable from './productTable';


class Product extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            products:[],
            deleteSuccess:false,
            productId:1
        };
    }

    intializeState=()=>{
      setTimeout(()=>{
          this.setState({deleteSuccess: false})
      }, 2000)
  }

    componentWillMount(){
        this.getBlogs()
    }


    getBlogs(){

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

    deleteProductWithId=(id)=>{
      console.log('http://localhost:3000/products' + '/' + id)
      axios.delete('http://localhost:3000/products' + '/' + id)
                .then(response=>{
                     console.log(response)
                     this.getBlogs()
                }, error=>{
                    console.error(error)
                })
    }

    editProductWithId=(editId)=>{
      console.log(editId);
     this.setState({productId:parseInt(editId)})
      console.log(this.state.productId)
    //   this.props.history.push({
    //     pathname: '/edit', 
    //     state: {productId: editId}
    // })
    }


    renderTable=()=>{
      console.log(this.state.products);
        return (
                this.state.products.map(product=>{
                    return (
                            // <tr >
                            // <td>{product.id}</td>
                            // <td>{product.product_name}</td>
                            // <td>{product.quantity}</td>
                            // <td>{product.price}</td>
                            // <td>{product.category}</td>
                            // <td style={{textAlign:"center"}}><button>Edit</button></td>
                            // <td style={{textAlign:"center"}} ><button onClick={this.deleteProduct(product.id)}>Delete</button></td>
                            // </tr>    
                          <ProductTable 
                          key={product.id} id ={product.id} name={product.product_name} quantity={product.quantity} price ={product.price}
                          category ={product.category} deleteId={this.deleteProductWithId} editId={this.editProductWithId}
                          />
                            
                         )
                    })
                )
    }

   
        
        render() { 
        return (
            <div>
                <br></br>
                <table border="1">
                <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th colSpan="2" style={{textAlign:"center"}}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.renderTable()}
                </tbody>
                </table>
                
            </div>
          );
    }
}
 
export default Product;