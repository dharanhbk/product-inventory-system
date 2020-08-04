import React from 'react';
import { Link } from 'react-router-dom';

class Addnew extends React.Component {
    
    render() { 
        return (
            <div className="loginForm">
        <form>
            <fieldset>

                <h2 style={{textAlign: "center",fontFamily:" Georgia, 'Times New Roman', Times, serif",color:"rgb(80, 80, 116)"}}>Add Product </h2>
                <label >Product Name: </label>
                <input type="text" />
                <br></br>
                <br></br>
                <label >Product Id: </label>
                <input type="text" />
                <br></br>
                <br></br>
                <label >Qty in stock:&nbsp;</label>
                <input type="text" />
                <br></br>
                <br></br>
                <label > Category :&nbsp;</label>
                <input type="text" />
                <br></br>
                <br></br>
                <label > Price in $ :&nbsp;</label>
                <input type="text" />
                <br></br>
                <br></br>
                
                <button type="submit"  className="submit" style={{float:"left"}} >
                    <Link to='/dashboard' style={{textDecoration:"none",color:"white"}}>Add Item</Link></button>
                <button type="submit"  className="submit" style={{float:" right", background:" red"}} >
                <Link to='/dashboard' style={{textDecoration:"none",color:"white"}}>Cancel</Link></button>
            </fieldset>
        </form>
        </div>
          );
    }
}
 
export default Addnew;