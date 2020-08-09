import React from "react";
import 'font-awesome/css/font-awesome.min.css';


class Footer extends React.Component{
    render(){
        return(
            <div>
                <br></br>
                <br></br>
                
                <footer className="footerContent">
            Connect with us on &nbsp;
            <i className="fa fa-facebook-f" ></i> &nbsp;/ &nbsp;
            <i className="fa fa-linkedin" ></i>&nbsp; /&nbsp;
            <i className="fa fa-instagram" ></i>&nbsp; /&nbsp;
            <i className="fa fa-pinterest-square" ></i>
            &nbsp;
            &nbsp; &emsp; &emsp;
            For any queries Dial--  1800-123-333 (toll-free number)

        </footer>
            </div>
        );
    }
}

export default Footer;