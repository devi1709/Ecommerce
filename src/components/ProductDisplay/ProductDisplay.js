import React,{useContext} from "react";
import './ProductDisplay.css';
import {BookContext} from '../../context/BookContext';

const ProductDisplay=(props)=>{
	const {product}=props;
	const {addToCart}=useContext(BookContext);
	return(
        <div className="product-display">
          <div className="product-display-left">
            <div className="productdisplay-img-list">
              <img src={product.image} alt=""/>
              <img src={product.image} alt=""/>
              <img src={product.image} alt=""/>
              <img src={product.image} alt=""/>             
            </div> 
            <div className="pro-display-img">
              <img src={product.image} className="pro-display-main-img" alt=""/>
            </div> 
          </div>
          <div className="product-display-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-prices">
               <div className="rightprice-old">${product.old_price}</div>
               <div className="rightprice-new">${product.new_price}</div>   
            </div>
            <p>Our selling books are quality. The prices of books are low and  cheap. </p>
            <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
          </div>
        </div>
		);
};
export default ProductDisplay;
