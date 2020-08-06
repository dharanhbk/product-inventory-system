import React from 'react';

import axios from "axios";
import './table.css'

class TableEmp extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            employee:[]
        };
    }

    componentWillMount(){
        this.getBlogs()
    }


    getBlogs(){

        axios.get('http://dummy.restapiexample.com/api/v1/employees')

            .then((response)=>{

                console.log(response)

                console.log(response.data)

                this.setState({employee: response.data.data})

                console.log(this.state.employee)

            }, (error)=>{

                console.log(error)

            })

    }



    renderTable=()=>{
      // console.log(this.state.employee);
        return (
                this.state.employee.map(emp=>{
                    return (
                            <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.employee_name}</td>
                            <td>{emp.employee_salary}</td>
                            <td>{emp.employee_age}</td>
                            <td><img src={emp.profile_image} /></td>
                            </tr>   
                         )
                    })
                )
    }
        
        render() { 
        return (
            <div>
                <h1>Table contents</h1>
                <table>
                <tr>
                    <th>id</th>
                    <th>Employee Name</th>
                    <th>Employee Salary</th>
                    <th>Employee Age</th>
                    <th>Profile image</th>
                </tr>
                {this.renderTable()}
                </table>
                
            </div>
          );
    }
}
 
export default TableEmp;