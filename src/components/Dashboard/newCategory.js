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
            buttonStatus:true
         }
    }
    checkCategoryValidation=()=>{
        let categoryerror=""
        if(this.state.newCategory==""){
            categoryerror="*Mandatory"
            this.setState({categoryError:categoryerror,buttonStatus:true})
            return false
        }
        this.setState({
            categoryError:'',
            buttonStatus:false
         })
        return true
    }


    newCategory=(event)=>{
        
        this.checkCategoryValidation()
        this.setState({newCategory:event.target.value})
        this.checkCategoryValidation()
        console.log(this.state.newCategory)
    }
    newId=(event)=>{
        
        this.setState({id:event.target.value})
        console.log(this.state.id)
    }
    
    addNewItem=()=>{
        let categoryadd =  {
            "id":this.state.id,
            "category":this.state.newCategory
          }
          console.log(categoryadd)
          Axios.post('http://localhost:3000/addcategory', categoryadd)
                .then(response=>{
                    console.log(response);
                    //this.props.history.push('/dashboard')
                    
                }, error=>{
                    console.error(error);
                })
    }

    render() { 
        return ( 
            <div>
                <br></br>
                <br></br>
                <DashboardHeader></DashboardHeader>
            <div className="loginForm">
        <form>
            <fieldset>

                <h2 style={{textAlign: "center",fontFamily:" Georgia, 'Times New Roman', Times, serif",color:"rgb(80, 80, 116)"}}>Add new Category </h2>
                <label style={{marginLeft:"-20px"}} >Category Id:&nbsp;</label>
                <input type="text" onChange={this.newId} style={{fontSize:"13px"}} />
                <br></br>
                <br></br>
                <label >Name:&nbsp;</label>
                <input type="text" onChange={this.newCategory} />
                <span style={{fontSize:"13px",color:"red"}}>{this.state.categoryError}</span>
                <br></br>
                <br></br>
                <Link to="/dashboard" style={{textDecoration:"none",color:"white"}}>
                <button type="submit" onClick={this.addNewItem} disabled={this.state.buttonStatus} className="submit">Add category</button>
                </Link>
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