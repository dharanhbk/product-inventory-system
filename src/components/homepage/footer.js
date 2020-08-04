import React from "react";


class Footer extends React.Component{
    render(){
        return(
            <div>
                <br></br>
                <br></br>
                <hr></hr>
                <footer className="footerContent">
            Connect with us on &nbsp;
            <i className="fa fa-facebook-f" style={{fontSize:"24px",color:"darkblue"}}></i> &nbsp;/ &nbsp;
            <i className="fa fa-linkedin" style={{fontSize:"24px",color:"rgb(100, 100, 202)"}}></i>&nbsp; /&nbsp;
            <i className="fa fa-instagram" style={{fontSize:"24px",color:"rgb(150, 11, 34)"}}></i>&nbsp; /&nbsp;
            <i className="fa fa-pinterest-square" style={{fontSize:"24px",color:"rgb(231, 16, 52)"}}></i>
            &nbsp;
            &nbsp; &emsp; &emsp;
            For any queries Dial--  1800-123-333 (toll-free number)

        </footer>
            </div>
        );
    }
}

export default Footer;