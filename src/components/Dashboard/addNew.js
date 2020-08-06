import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

class AddNew extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            id:"",
            qty:0,
            cty:"",
            price:""
        }
    }

    getId=(event)=>{
        console.log(event.target.value)
        this.setState({id:event.target.value});
    }
    getName=(event)=>{
        console.log(event.target.value)
        this.setState({name:event.target.value});
    }
    getQty=(event)=>{
        console.log(event.target.value)
        this.setState({qty:event.target.value});
    }
    getPrice=(event)=>{
        console.log(event.target.value)
        this.setState({price:event.target.value});
    }
    getCategory=(event)=>{
        console.log(event.target.value)
        this.setState({cty:event.target.value});
    }


    addNewItem=()=>{
        let frndreqbody =  {
            "product_name": this.state.name,
            "id": this.state.id,
            "quantity": this.state.qty,
            "category": this.state.cty,
            "price": this.state.price
          }
          axios.post('http://localhost:3000/products', frndreqbody)
                .then(response=>{
                    console.log(response);
                    //this.props.history.push('/dashboard')
                    
                }, error=>{
                    console.error(error);
                })
    }


    render(){
        return(
            <div className="loginForm">
        <form>
            <fieldset>

                <h2 style={{textAlign: "center",fontFamily:" Georgia, 'Times New Roman', Times, serif",color:"rgb(80, 80, 116)"}}>Edit Product </h2>
                <label >Product Name: </label>
                <input type="text"    onChange={this.getName}/ >
                <br></br>
                <br></br>
                <label >Product Id: </label>
                <input type="text" onChange={this.getId}/>
                <br></br>
                <br></br>
                <label >Qty in stock:&nbsp;</label>
                <input type="text" onChange={this.getQty}/>
                <br></br>
                <br></br>
                <label > Category :&nbsp;</label>
                <input type="text" onChange={this.getCategory} />
                <br></br>
                <br></br>
                <label > Price in $ :&nbsp;</label>
                <input type="text" onChange={this.getPrice}/>
                <br></br>
                <br></br>
                
                    <Link to='/dashboard' style={{textDecoration:"none",color:"white"}}>
                    <button type="submit" onClick={this.addNewItem}  className="submit" style={{float:"left"}} >Save Item</button></Link>
                <button type="submit"  className="submit" style={{float:" right", background:" red"}} >
                <Link to='/dashboard' style={{textDecoration:"none",color:"white"}}>Cancel</Link></button>

            </fieldset>
        </form>
    </div>
        );
    }
}

export default AddNew;