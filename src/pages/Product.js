import React,{useContext} from "react";
import {BookContext} from '../context/BookContext';
import {useParams} from 'react-router-dom';
import BreadCrum from '../components/BreadCrum/BreadCrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Description from '../components/Description/Description';
import Related from '../components/Related/Related';


const Product=()=>{
	const {all_product}=useContext(BookContext);
	const {productId}=useParams();
	const product=all_product.find((e)=>e.id===Number(productId));
	return(
        <div>
          <BreadCrum product={product}/>
          <ProductDisplay product={product}/>
          <Description/>
          <Related/>
        </div>
	);
};
export default Product;