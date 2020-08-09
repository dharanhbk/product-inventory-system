import React from 'react';
import { withRouter, Link } from "react-router-dom"
import axios from "axios";
import './table.css'
import ProductTable from './productTable';
import Cards from './cards';
import { Navbar, Nav } from 'react-bootstrap';


class Product extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            products:[],
            productsearch:[],
            deleteSuccess:false,
            productId:1,
            searchValue:""
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
                this.setState({productsearch: response.data})

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
     this.setState({productId: editId})
      console.log(this.state.productId)
      this.props.history.push({
        pathname: '/edit', 
        state: {productId:editId}
    })
    }

    getSearch=(event)=>{
                        
        let searchV = event.target.value
        if(searchV==''){
            this.getBlogs()
        }
        this.setState({searchValue: searchV})
        console.log(searchV);
        let searchF = this.state.productsearch.filter(f=>{
                                return f.category.toLowerCase().match(searchV.toLowerCase().trim())
                            })
        console.log(searchF);    
        this.setState({products: searchF}) 
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
                          category ={product.category} prodImage={product.productimage}
                          deleteId={this.deleteProductWithId} editId={this.editProductWithId}
                          />
                            
                         )
                    })
                )
    }


    renderCard=()=>{
        console.log(this.state.products);
        return (
                this.state.products.map(product=>{
                    return (
                        <Cards 
                        key={product.id} id ={product.id} name={product.product_name} quantity={product.quantity} price ={product.price}
                        category ={product.category} prodImage={product.productimage}
                        deleteId={this.deleteProductWithId} editId={this.editProductWithId}
                        />)
                    })
        )
    }



   
        
        render() { 
        return (
            <div>
                <div className="dashBoard">
                <span style={{fontSize: "25px",color: "rgb(182, 133, 41)",marginLeft:"20px"}}>Search :</span>
                <input type="text" placeholder="Search by category" name="search" onChange={this.getSearch} style={{fontSize: "25px "}} />
               

                {/* <i className="fa fa-filter" style={{fontSize: "30px ",marginLeft: "100px"}}  > Filter Product</i> */}
                <Link to="/dashboard" style={{padding:"50px"}}>Dashboard</Link>
                <Link to="/stockdetails" style={{padding:"50px"}}>Stock Details</Link>

               <Link to="/add-new"><button type="button"  style={{marginLeft: "100px"}}>Add new item </button></Link>
               <Link to="/add-new-category"><button type="button"  style={{marginLeft: "100px"}}>Add new Category </button></Link>
                {/* <button type="button" style={{marginLeft: "50px"}}>Add new Category</button> */}
    
            </div>
                <br></br>
                <br></br>
                {/* <table border="1">
                <thead>
                <tr>
                    <th>Product Image</th>
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
                </table> */}
                <div className="row">
                    {this.renderCard()}
                </div>
                
            </div>
          );
    }
}
 
export default withRouter(Product);