import React from "react";
import './News.css';
import {Link} from "react-router-dom";

const News=()=>{
	return(
       <div className="newsletter">
         <h1>Get Exclusive offers on your Email</h1>
         <p>subscribe to news and stay upadatd</p>
         <div>
           <input type="email" placeholder="Your Email"/>
           <button><Link to="/" style={{textDecoration:"none",color:"#fff"}}>Subscribe</Link></button>
         </div>
       </div>
		);
};
export default News;