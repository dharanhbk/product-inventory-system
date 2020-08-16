import { Link } from "react-router-dom";
import React from 'react';
import axios from "axios";
import DashboardHeader from "../homepage/dashboardHeader";


class Edit extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props);
        console.log(this.props.location);
       // console.log(this.props.location.state);
        //console.log(this.props.location.state.myid);
        this.state={
            name:'',
            id: "",
            qty:1,
            price:0,
            category:"",
            nameError:"",
            buttonStatus:false
        }
    }
    componentWillMount(){
        if(this.props.location.state !== undefined){
            axios.get('http://localhost:3000/products/'+this.props.location.state.productId)
                .then(response=>{
                    console.log(response);
                    this.setState({
                        name: response.data.product_name,
                        id:response.data.id,
                        qty:response.data.quantity,
                        category:response.data.category,
                        price:response.data.price,
                        images:response.data.productimage
                    })
                }, error=>{
                    console.error(error);
                })
        }
    }
    checkValidName=()=>{
        let nameerror=''
        if(this.state.name.length<3){
            this.setState({nameError:" *Must contain 3 letters",buttonStatus:true})
        }else{
            this.setState({nameError:" ",buttonStatus:false})
        }
    }

    editName=(event)=>{
        this.checkValidName()
        this.setState({name: event.target.value})
        this.checkValidName()
    }
    editid=(event)=>{
        this.setState({id: event.target.value})
    }
    editQty=(event)=>{
        this.setState({qty: event.target.value})
    }
    editCategory=(event)=>{
        console.log(event.target.value)
        this.setState({category:event.target.value});
    }
    editPrice=(event)=>{
        this.setState({price: event.target.value})
    }

    editProduct=()=>{
        let friendRequestBody = {
            "product_name": this.state.name,
            "id": this.state.id,
            "quantity": this.state.qty,
            "category": this.state.category,
            "price": this.state.price,
            "productimage": this.state.images,
            "chart": {
            "product-name": this.state.product_name,
            "quantity": this.state.quantity}
        }

        axios.put('http://localhost:3000/products/'+this.state.id, friendRequestBody)
                .then(response=>{
                    console.log(response);
                    this.props.history.push('/dashboard')
                }, error=>{
                    console.error(error);
                })
    }


    render(){
        if(this.props.location.state === undefined){
            return (
                <div>
                    <h1>Please select the product to edit from <Link to="/dashboard">dashboard</Link> </h1>
                </div>
            )
        }
        return(
            <div>
                <br></br>
                <br></br>
                <DashboardHeader></DashboardHeader>
            <div className="editForm">
        <form>
            <fieldset>

                <h2 style={{textAlign: "center",fontFamily:" Georgia, 'Times New Roman', Times, serif",color:"rgb(80, 80, 116)"}}>Edit Product </h2>
                <label >Product Name: </label><span style={{fontSize:"15px",color:"red"}}>{this.state.nameError}</span><br></br>
                <input type="text" value={this.state.name} onChange={this.editName}/>
                <br></br>
                <br></br>
                <label >Product Id:  </label><br></br>
                <input type="text" value={this.state.id} onChange={this.editid} readOnly/>
                <br></br>
                <br></br>
                <label >Quantity:&nbsp;</label><br></br>
                <input type="number" value={this.state.qty} min="0" onChange={this.editQty}/>
                <br></br>
                <br></br>
                <label > Category :&nbsp;</label><br></br>
                <input type="text" value={this.state.category} onChange={this.editCategory} readOnly></input>
                <br></br>
                <br></br>
                <label > Price in $ :&nbsp;</label><br></br>
                <input type="number" value={this.state.price} min="1" onChange={this.editPrice} />
                <br></br>
                <br></br>
                
               <Link to="/dashboard">
                   <button type="submit"  className="button3" style={{float:"left"}} onClick={this.editProduct} disabled={this.state.buttonStatus}>Save Item</button>
               </Link> 
                <button type="submit"  className="button4" style={{float:" right", background:" red"}} >
                <Link to='/dashboard' style={{textDecoration:"none",color:"white"}}>Cancel</Link></button>

            </fieldset>
        </form>
    </div>
    </div>
        );
    }
}

export default Edit;