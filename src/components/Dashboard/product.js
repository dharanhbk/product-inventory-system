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
            searchValue:"",
            dropdownCategory:[]
        };
    }

    intializeState=()=>{
      setTimeout(()=>{
          this.setState({deleteSuccess: false})
      }, 2000)
  }

    componentWillMount(){
        this.getBlogs()
        this.getAllCategory()
    }

    getAllCategory=()=>{
        axios.get("http://localhost:3000/addcategory")
        .then(response=>{
            this.setState({dropdownCategory:response.data})
            console.log(this.state.dropdownCategory)
            this.state.dropdownCategory.map(p=>console.log(p.category))
        })
    }
    getCategory=(e)=>{
        let drop = e.target.value;
        if(drop=='Select'){
            this.getBlogs()
        }
        let dropvalues = this.state.productsearch.filter(f=>{
          return f.category.match(drop)
        })
        this.setState({
         products:dropvalues
        })
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
                                return f.product_name.toLowerCase().match(searchV.toLowerCase().trim())
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
                {/* <div className="dashBoard">
                <span>
                <label>Search: </label>
                <input type="text" placeholder="Search for product name" name="search" onChange={this.getSearch} />
                </span>
               <span>
               <Link to="/dashboard" style={{padding:"50px",textDecoration:"none",color:"brown"}}>Dashboard</Link>
               </span>
                <span>
                <Link to="/stockdetails" style={{padding:"50px",textDecoration:"none",color:"brown"}}>Stock Details</Link>
                </span>
                <span>
                <Link to="/add-new"><button type="button" className="button1"  style={{marginLeft: "100px"}}>Add new item </button></Link>
                </span>
                <span>
                <Link to="/add-new-category"><button type="button" className="button2"  style={{marginLeft: "100px"}}>Add new Category </button></Link>
                </span>
                </div> */}
                <div className="topnav">
                <Link to="/dashboard"> Dashboard</Link>
                <Link to="/stockdetails" >Stock Details</Link>
                <Link to="/add-new">Add new item </Link>
                <Link to="/add-new-category">Add new Category</Link>
                <label for="filter">Filter</label>
                <select id="filter" onChange={this.getCategory} >
                            {this.state.dropdownCategory.map(p=><option key={p.id} value={p.category}>{p.category}</option>)}
                </select>
                <input type="text" placeholder="Search for product name" name="search" onChange={this.getSearch} />
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