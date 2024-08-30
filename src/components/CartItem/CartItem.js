import React, {useContext} from 'react';
import './CartItem.css';
import {BookContext} from '../../context/BookContext';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItem=()=>{
	const {getTotalAmount,all_product,cartItems,removeFromCart}=useContext(BookContext);
  
  const handle=()=>{
    alert("cart item has saved");
  }
 
	return(
        <div className="cartitem">
          <div className="cartitem-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr/>
          {all_product.map((e)=>{
          	if(cartItems[e.id]>0)
          	{
          		return <div>
                         <div className	="cart-format">
                            <img src={e.image} alt="" className="cart-product"/>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cart-quantity">{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className="cart-remove" src={remove_icon} onClick={()=>{removeFromCart(e.id)}}alt=""/>
                         </div>
                         <hr/>
          		       </div>
          	}
          	return null;
          })}
          <div className="cart-down">
             <div className="cart-total">
               <h1>Cart Totals</h1>
               <div>
                <div className="cartitems-total">
                   <p>subtotal</p>
                   <p>${getTotalAmount()}</p>
                </div>
                <hr/>
                <div className="cartitems-total">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className	="cartitems-total">
                   <h3>Total</h3>
                   <h3>${getTotalAmount()}</h3>
                </div>
               </div>
               <button onClick={handle}>PROCEED TO CHECKOUT</button>
             </div>
             
          </div>
        </div>
       );  

};
export default CartItem;