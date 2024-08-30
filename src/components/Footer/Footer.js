import React from "react";
import './Footer.css'
import footer_logo from "../assets/logo_big.png"
import instagram_icon from "../assets/instagram_icon.png"
import pintester_icon from "../assets/pintester_icon.png"
import whatsapp_icon from "../assets/whatsapp_icon.png"

const Footer=()=>{
	return(
       <div className="footer">
         <div className="footer-logo">
           <img src={footer_logo} alt=""/>
           <p>BOOKS</p>
         </div>
         <ul className="footer-links">
           <li>company</li>
           <li>products</li>
           <li>Offices</li>
           <li>about</li>
           <li>contact</li>
         </ul>
         <div className="footer-icons">
            <div className="footer-icons-container">
              <img src={instagram_icon} alt=""/>
            </div>
            <div className="footer-icons-container">
              <img src={pintester_icon} alt=""/>
            </div>
            <div className="footer-icons-container">
              <img src={whatsapp_icon} alt=""/>
            </div>
         </div>
         <div className="footer-copyright">
            <hr/>
            <p>Copyright &copy; 2024</p>
 
         </div>
       </div>
		)
};
export default Footer;