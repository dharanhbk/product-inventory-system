import React from 'react'
import Chart from "react-google-charts";
import {Line, Bar} from 'react-chartjs-2';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import DashboardHeader from '../homepage/dashboardHeader';



class Stock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            products:[],
            unique:[],
            arr : [
                ["product name","quantity"]
            ],
            arr1: [
                ["Category","quantity"]
            ]
        }
    }
    
    componentWillMount(){
        this.getblogs()
    }
    componentDidMount(){
        this.getblogs()
    }


    getblogs=()=>{
        Axios.get('http://localhost:3000/products')

                    .then((response)=>{
                        //console.log(response)
                        //console.log(response.data)
                        this.setState({products: response.data})
                       // console.log(this.state.products)
                        var myarray=[]
                        this.state.products.map(p=>{
                            this.state.arr.push([p.product_name,parseInt(p.quantity)]) && myarray.push(p.category);
                        })
                        var unique = myarray.filter((v, i, a) => a.indexOf(v) === i);
                        this.setState({unique:unique})
                        //console.log(unique)
                        this.state.products.map(p=>{
                            let category= p.category
                            let sum =0
                            let productFiltered = this.state.products.filter(prod=>prod.category===category)
                            //console.log(productFiltered)
                            productFiltered.map(pf=>{
                                sum+=parseInt(pf.quantity)
                            })
                            if(this.state.unique.includes(p.category)){
                                this.state.arr1.push([p.category,sum])
                                var index= this.state.unique.indexOf(p.category)
                                this.state.unique.splice(index,1)
                            }
                           
                        })
                    }, 
                    (error)=>{
                       // console.log(error)
                        
                    })
                }

    
        

    render(){
        return(
            <div>
                <br></br>
                <br></br>
                <DashboardHeader ></DashboardHeader> 
                <br></br>
                <br></br>
                <div className="topnav">
                <Link to="/dashboard">Home</Link>
                <Link to="/stockdetails" style={{background:"white",color:"black"}}>Dashboard</Link>
                <Link to="/add-new">Add new item </Link>
                <Link to="/add-new-category">Add new Category</Link>
                </div>
                <br></br>
                <Chart
                    width={'1800px'}
                    height={'600px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={this.state.arr1}
                    options={{
                        title: 'Category Details',
                        is3D:true
                    }}
                    legendToggle
                />
                <br></br>
                <div>
                
      </div>
                </div>
        );
    }
}

export default Stock;