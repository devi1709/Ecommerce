import React from "react";
import {useNavigate} from "react-router-dom";
import {useUserAuth} from '../../context/UserAuthContext';

const LogSign=()=>{
  const {logOut,user}=useUserAuth();
  const navigate=useNavigate();	
  
  const handleLogout=async()=>{
    try{
      await logOut();
      navigate("/login")
    }catch(error){
      console.log(error.message);
    }
  };
  return(
  	<>
       <div>
          Hello Welcome <br/>
          {user && user.email}
       </div>
       <div>
         <button onClick={handleLogout}>
           Log Out
         </button>  
       </div>
    </>   
  	);
};
export default LogSign;
