import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import DashboardHeader from '../homepage/dashboardHeader';

class NewCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:0,
            newCategory:"",
            categoryError:"*Mandatory",
            buttonStatus:true,
            existError:""
         }
    }
    checkCategoryValidation=async()=>{
        let categoryerror=""
        if(this.state.newCategory.length<=1){
            categoryerror="*Mandatory"
            this.setState({categoryError:categoryerror})   
        }else{
            this.setState({
                categoryError:''
             })
            }
        
    }


    newCategory=(event)=>{
        
        this.checkCategoryValidation()
        this.setState({newCategory:event.target.value})
        this.checkCategoryValidation()
       // console.log(this.state.newCategory)
    }
    
    
    addNewItem=async()=>{
        let categoryadd =  {
            "category":this.state.newCategory
          }
          
          const product=await Axios.get("http://localhost:3000/products?category="+this.state.newCategory)
         // console.log(product.data[0].category)
          if(product.data.length!==0){
              if(this.state.newCategory.toLowerCase()===product.data[0].category.toLowerCase()){
                  this.setState({categoryError:"*Category Already Exist"})
                  this.setState({buttonStatus:true})
              }

              if(this.state.categoryError===""){

                Axios.post('http://localhost:3000/addcategory', categoryadd)
                .then(response=>{
                    
                }, error=>{
                   // console.error(error);
                })
                this.props.history.push('/dashboard')
            }
            }
            
            
    }

    render() { 
        return ( 
            <div>
                <br></br>
                <br></br>
                <DashboardHeader></DashboardHeader>
                <br></br>
            <div className="loginForm">
        <form>
            <fieldset>
                <h2 style={{textAlign: "center",fontFamily:" Georgia, 'Times New Roman', Times, serif",color:"rgb(80, 80, 116)"}}>Add new Category </h2>
                <label >Name:&nbsp;</label><span style={{fontSize:"13px",color:"red"}}>{this.state.categoryError}</span>
                <input type="text" placeholder="New Category" onChange={this.newCategory} />  
                <br></br>
                {/* <Link to="/dashboard" style={{textDecoration:"none",color:"white"}}> */}
                <button type="submit" onClick={this.addNewItem} data-testid="addcategory"  className="submit">Add category</button>
                {/* </Link> */}
                <Link to="/dashboard" style={{textDecoration:"none",color:"white"}}>
                <button type="submit"  className="submit" style={{background:"red"}}>Cancel</button>
                </Link>
                <br></br>
            </fieldset>
        </form>
    </div>
    </div>
         );
    }
}
 
export default NewCategory;