import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/popular/Popular";
import Offers from "../components/offers/Offers";
import New from "../components/New/New"
import News from "../components/News/News";

const Book=()=>{
	return(
		<div>
          <Hero/>
          <Popular/>
          <Offers/>
          <New/>
          <News/>
        </div>  
	);
};
export default Book;