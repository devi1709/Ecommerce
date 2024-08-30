import React,{useContext} from "react";
import './Css/BookCategory.css'
import {BookContext} from '../context/BookContext';
import Item from "../components/Items/Item";

const BookCategory=(props)=>{
	const {all_product}=useContext(BookContext);
	return(
        <div className="shop-category">
          <div className="shopcategory-indexSort">
            <p>
             <span>showing 1-8</span> out of 24 products
            </p>
          
          </div>
          <div className="shopcategory-products">
            {all_product.map((item,i)=>{
              if(props.category===item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else{
              	return null;
              }
            })}
          </div>
          <div className="shop-category-loadmore">
            Explore More
          </div>
        </div>
	);
};
export default BookCategory;