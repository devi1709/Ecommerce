import React,{useContext,useRef} from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import {BookContext} from '../../context/BookContext';
import dropdown_icon from '../assets/dropdown_icon.png';

const Navbar=()=>{

  const {gettotalCartItems}=useContext(BookContext);
  const menuRef=useRef();
  
  const dropdown_toggle=(e)=>{
    menuRef.current.classList.toggle("nav-menu-visible")
    e.target.classList.toggle("open");
  }


	return(
        <div className="navbar">
         <div className="nav-logo">
           <img src={logo} alt=""/>
           <p>BOOKS</p>
         </div>
         <img  className="nav-drop" onClick={dropdown_toggle} src={dropdown_icon} alt=""/>
         <ul ref={menuRef} className="nav-menu">
           <li><Link style={{textDecoration:'none'}} to="/">All</Link></li>
           <li><Link style={{textDecoration:'none'}} to="/poem">Poem</Link></li>
           <li><Link style={{textDecoration:'none'}} to="/fiction">Fiction</Link></li>
           <li><Link style={{textDecoration:'none'}} to="/non-fiction">Non-Fiction</Link></li>
         </ul>
         <div className="nav-login-cart">
           <Link to="/login"><button>Login</button></Link>
           <Link to="/cart"><img src={cart_icon} alt="" className="logo"/></Link>
           <div className="nav-cart-count">{gettotalCartItems()}</div>
         </div>
        </div>

		);
}
export default Navbar;


























