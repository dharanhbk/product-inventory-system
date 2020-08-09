import React from 'react'
import Chart from "react-google-charts";
import Axios from 'axios';
import { Link } from 'react-router-dom';
import DashboardHeader from '../homepage/dashboardHeader';


class Stock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            products:[],
            arr : [
                ["product name","quantity"]
            ]
        }
    }
    
    componentWillMount(){
       
        this.getblogs()
        
        
    }
    getblogs=()=>{
        Axios.get('http://localhost:3000/products')

                    .then((response)=>{
                        console.log(response)
                        console.log(response.data)
                        this.setState({products: response.data})
                        console.log(this.state.products)
                        this.state.products.map(p=>{
                            this.state.arr.push([p.product_name,parseInt(p.quantity)]);
                            console.log(this.arr);
                        })
                    }, (error)=>{

                        console.log(error)
                        
                    })
                }

    
        

    render(){
        return(
            <div>
                <br></br>
                <br></br>
                <DashboardHeader ></DashboardHeader> 
                <Link to="/dashboard"> <span style={{marginTop:"100px"}}> Back to Dashboard </span></Link>

                <Chart
                    width={'1800px'}
                    height={'600px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={this.state.arr}
                    options={{
                        title: 'Stock Details',
                        is3D:true
                    }}
                    
                />
                </div>
        );
    }
}

export default Stock;