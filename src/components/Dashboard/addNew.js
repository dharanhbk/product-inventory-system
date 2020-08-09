import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import DashboardHeader from '../homepage/dashboardHeader';

class AddNew extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            id:"",
            qty:1,
            cty:"",
            price:0,
            productimage:'',
            nameError:"*Must contain 3 letters",
            idError:"*Not Mandatory",
            qtyError:"",
            priceError:"",
            productimagError:'*Mandatory',
            allCty:[]
        }
    }

    componentWillMount(){
        this.getAllCty()
    }
    checkNameValid=()=>{
        let nameerror=""
      if(this.state.name.length<=1){
          nameerror="*Must contain 3 letters"
        this.setState({nameError:nameerror})
    }else{
        this.setState({nameError:nameerror})
    }
}
    checkImageValid=()=>{
        let productimagerror=''
        if(this.state.productimage.length<0){
        productimagerror="Mandatory"
        this.setState({productimagError:productimagerror})
        }else{
            this.setState({productimagError:productimagerror})
        }
    }

    getAllCty=()=>{
        axios.get("http://localhost:3000/addcategory")
        .then(response=>{
            this.setState({allCty:response.data})
            console.log(this.state.allCty)
            this.state.allCty.map(p=>console.log(p.category))
        })
    }

    getId=(event)=>{
        console.log(event.target.value)
        this.setState({id:event.target.value});
    }
    getName=(event)=>{
       //console.log(event.target.value)
        this.checkNameValid()
        this.setState({name:event.target.value});
        this.checkNameValid()
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
            "price": this.state.price,
            "productimage":this.state.productimage,
            "chart":{
                "product-name":this.state.name,
                "quantity":this.state.qty
            }
          }
          if(this.state.nameError===''&&this.state.productimagError==='' ){
          axios.post('http://localhost:3000/products', frndreqbody)
                .then(response=>{
                    console.log(response);
                    //this.props.history.push('/dashboard')
                    
                }, error=>{
                    console.error(error);
                })
                this.props.history.push('/dashboard')
                alert("product added Successfully")
            }
            else{
                alert("Enter valid product details")
            }
    }
    getImage=(event)=>{

        console.log(event.target.value);

        console.log(event.target.value.substr(12));

        this.checkImageValid()
        this.setState({productimage: event.target.value.substr(12)})
        this.checkImageValid()

    }
    
    render(){
        return(
            <div>
                <br></br>
                <br></br>
                <DashboardHeader></DashboardHeader>
            <div className="AddItemForm">
        <form>
            <fieldset>

                <h2 style={{textAlign: "center",fontFamily:" Georgia, 'Times New Roman', Times, serif",color:"rgb(80, 80, 116)"}}>Add Product </h2>
                <label >Product Name: </label>
                <input type="text"    onChange={this.getName}/ >&nbsp;{this.state.nameError}
                <br></br>
                <br></br>
                <label >Product Id: </label>
                <input type="text" onChange={this.getId}/>&nbsp;{this.state.idError}
                <br></br>
                <br></br>
                <label >Qty in stock:&nbsp;</label>
                <input type="number" onChange={this.getQty} defaultValue="1" />&nbsp;
                <br></br>
                <br></br>
                <label style={{marginLeft:"-10pxpx"}} > Category :&nbsp;</label>
                <select name="list" id="list" onChange={this.getCategory} >
                    {this.state.allCty.map(cty=><option key={cty.id} value={cty.category}>{cty.category}</option>)}
                </select>
                <br></br>
                <br></br>
                <label > Price in $ :&nbsp;</label>
                <input type="number" onChange={this.getPrice} defaultValue="0"/>
                <br></br>
                <br></br>
                <span style={{display:"inline"}}> 
                    <label>Image: </label><input type="file" onChange={this.getImage} multiple accept='image/*' />{this.state.productimagError}
                </span> 
                <br></br>
                     
                <br></br>
                    {/* <Link to='/dashboard' style={{textDecoration:"none",color:"white"}}> */}
                    <button type="submit" onClick={this.addNewItem}  className="submit" style={{float:"left"}} >Save Item</button>
                <button type="submit"  className="submit" style={{float:" right", background:" red"}} >
                <Link to='/dashboard' style={{textDecoration:"none",color:"white"}}>Cancel</Link></button>

            </fieldset>
        </form>
    </div>
    </div>
        );
    }
}

export default AddNew;