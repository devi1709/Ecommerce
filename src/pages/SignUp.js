import React,{useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import {useUserAuth} from "../context/UserAuthContext";


const SignUp=()=>{
  const [user,setUser]=useState ("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const {signUp}=useUserAuth();
  const [error,setError]=useState("");
  const navigate=useNavigate();


  const handleSubmit= async (e)=>{
    e.preventDefault();
    setError("");
    try{
     await signUp(email,password);
     navigate("/login");
    }catch(error){
      setError(error.message);
    }
  };



  return(
       <div className="loginsignup">
        <div className="loginsignup-container">
           <h1>Create an account</h1>
           {error}
           <form onSubmit={handleSubmit} className="loginsignup-fields">
              <input
               type="text"
               placeholder="name"
               value={user}
               onChange={(e)=>setUser(e.target.value)}
              /> 
              <input 
               type="email"
               placeholder="email"
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
              />
              <input
               type="password" 
               placeholder="password"
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
              />
              <button type="submit">Signup</button>
              <div className="last">
                <p>Already have an account ?<Link to="/login" style={{textDecoration:"none",color:"#999"}}>Login</Link></p>
              </div>  
          </form>
        </div>
       </div> 
    );
};
export default SignUp;