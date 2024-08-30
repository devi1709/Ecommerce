import {createContext, useEffect, useState,useContext} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import {auth} from "../firebase";


const UserAuthContext=createContext();

export const UserAuthContextProvider=({children})=>{
  const [user,setUser]=useState({});


	const signUp=(email,password)=>{
		return createUserWithEmailAndPassword(auth,email,password);
	}
	const logIn=(email,password)=>{
		return signInWithEmailAndPassword(auth,email,password);
	}
	const logOut=()=>{
		return signOut(auth);
	}
  const googleSignIn=()=>{
    const googleAuthProvider=new GoogleAuthProvider();
    return signInWithPopup(auth,googleAuthProvider);
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            console.log("Auth",currentUser);
            setUser(currentUser);
    });
    return ()=>{
       unsubscribe();
    };
  },[]);


	return(
        <UserAuthContext.Provider value={{user,signUp,logIn,logOut,googleSignIn}}>
           {children}
        </UserAuthContext.Provider>
		);
}
export function useUserAuth(){
  return useContext(UserAuthContext);
}