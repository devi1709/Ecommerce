import React from "react";
import './Hero.css';
import {Link} from "react-router-dom";
import arrow from '../assets/arrow.png';
import hero from '../assets/hero_image.png';

const Hero=()=>{
	return(
        <div className="hero">
          <div className="hero-left">
            <h2>NEW ARRIVALS</h2>
            <p>Stocks for all books</p>
            <div className="hero-latest-btn">
              <div><Link to="/" style={{textDecoration:"none",color:"#fff"}}>New Books</Link></div>
              <img src={arrow} alt=""/>
            </div>
          </div>
          <div className="hero-right">
            <img src={hero} alt=""/>

          </div>
        </div>
	);
};
export default Hero;