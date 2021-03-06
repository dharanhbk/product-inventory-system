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
            ctyError:"*Select Category",
            qtyError:"",
            priceError:"",
            existError:"",
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
    checkCategory=()=>{
        let ctyerror=' '
        if(this.state.category=="Select" || this.state.category==""){
            ctyerror="*Select Category"
            this.setState({ctyError:ctyerror})
        }else{
            this.setState({ctyError:ctyerror})
        }
    }
    getAllCty=()=>{
        axios.get("http://localhost:3000/addcategory")
        .then(response=>{
            this.setState({allCty:response.data})
            //this.state.allCty.map(p=>console.log(p.category))
        })
    }

    getId=(event)=>{
        //console.log(event.target.value)
        this.setState({id:event.target.value});
    }
    getName=(event)=>{
       //console.log(event.target.value)
        this.checkNameValid()
        this.setState({name:event.target.value});
        this.checkNameValid()
    }
    getQty=(event)=>{
        //console.log(event.target.value)
        this.setState({qty:event.target.value});
    }
    getPrice=(event)=>{
        //console.log(event.target.value)
        this.setState({price:event.target.value});
    }
    getCategory=(event)=>{
        //console.log(event.target.value)
        this.checkCategory()
        this.setState({cty:event.target.value});
        this.checkCategory()
    }


    addNewItem=async()=>{
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
          const product =await axios.get("http://localhost:3000/products?product_name="+this.state.name)
          //console.log(product.data[0].product_name)
          if(product.data.length!==0){
              if(this.state.name.toLowerCase()===product.data[0].product_name.toLowerCase()){
                  this.setState({nameError:"*Product Already Exist"})
              }
          if(this.state.nameError===''&&this.state.productimagError==='' &&this.state.existError==="" ){
          axios.post('http://localhost:3000/products', frndreqbody)
                .then(response=>{
                   // console.log(response);
                    //this.props.history.push('/dashboard')
                    
                }, error=>{
                   // console.error(error);
                })
                this.props.history.push('/dashboard')
               // alert("product added Successfully")
            }
            else{
                //alert("Enter valid product details")
            }
    }
}
    getImage=(event)=>{

       // console.log(event.target.value);

        //console.log(event.target.value.substr(12));

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
                <br></br>
                <br></br>
            <div className="AddItemForm">
        <form>
            <fieldset>

                <h2 style={{textAlign: "center",fontFamily:" Georgia, 'Times New Roman', Times, serif",color:"rgb(80, 80, 116)"}}>Add Product </h2>
                <label  >Product Name: </label><span style={{color:"red",fontSize:"12px"}}>{this.state.nameError}<br></br></span>
                <input type="text" placeholder="Product name"    onChange={this.getName}/ >&nbsp;
                <br></br>
                <label >Product Id: </label><span style={{color:"red",fontSize:"12px"}}>{this.state.idError}<br></br></span>
                <input type="text" onChange={this.getId}/>&nbsp;

                <br></br>
                <label >Qty in stock:&nbsp;</label><br></br>
                <input type="number" placeholder="Quantity" onChange={this.getQty} min="0" defaultValue="1" />&nbsp;
                
                <br></br>
                <label style={{marginLeft:"-10pxpx"}} > Category :&nbsp;</label>
                <span style={{color:"red",fontSize:"12px"}}>{this.state.ctyError}</span><br></br>
                <select  id="list" onChange={this.getCategory} >
                    {this.state.allCty.map(cty=><option key={cty.id} value={cty.category}>{cty.category}</option>)}
                </select>
                
                <br></br>
                <label > Price in $ :&nbsp;</label><br></br>
                <input type="number" placeholder="Price" onChange={this.getPrice} min="1" defaultValue="1"/>
                <br></br>
                <span style={{display:"inline"}}> 
                    <label>Image: </label><input type="file" onChange={this.getImage} multiple accept='image/*' />
                    <span style={{color:"red",fontSize:"12px"}}>{this.state.productimagError}</span>&nbsp;
                    <span style={{color:"red",fontSize:"12px"}}>{this.state.existError}</span>
                </span> 
                     
                <br></br>
                <br></br>
                    {/* <Link to='/dashboard' style={{textDecoration:"none",color:"white"}}> */}
                    <button type="submit" data-testid="addnewbutton" onClick={this.addNewItem}  className="button3"  >Save Item</button>&nbsp;
               
                <Link to='/dashboard' style={{textDecoration:"none",color:"white"}}>
                <button type="submit"  className="button4"   >Cancel</button>
                </Link>

            </fieldset>
        </form>
    </div>
    </div>
        );
    }
}

export default AddNew;