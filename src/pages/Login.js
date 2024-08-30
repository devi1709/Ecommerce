import React,{useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import GoogleButton from "react-google-button";
import {useUserAuth} from "../context/UserAuthContext";
import './Css/Login.css';

const Login=()=>{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const {logIn,googleSignIn}=useUserAuth();
  const navigate=useNavigate();


  const handleSubmit=async(e)=>{
       e.preventDefault();
       setError("");
       try{
         await logIn(email,password);
         navigate("/login");
       }catch(error){
        setError(error.message);
       }
  };

  const handleGoogleSignIn=async(e)=>{
      e.preventDefault();
      try{
        await googleSignIn();
        navigate("/logsign");
      }catch(error){
        console.log(error.message);
      }
  };



  return(
      <div className="loginsignup">
        <div className="loginsignup-container">
            {error}
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="loginsignup-fields">
              <input 
               type="email"
               placeholder="email"
               value={email }
               onChange={(e)=>setEmail(e.target.value)}
              />
              <input 
               type="password"
               placeholder="password"
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
          
            <div className="google">
             <GoogleButton
              className="googlebutton"
              onClick={handleGoogleSignIn}
             />
            </div>
            <div className="last">
               Dont'have an account? <Link to="/signup" style={{textDecoration:"none",color:"#999"}}>signup</Link>
            </div>
        </div> 
      </div>  
    );
};
export default Login;