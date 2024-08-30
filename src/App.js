import React from "react";
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Book from './pages/Book';
import BookCategory from './pages/BookCategory';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import LogSign from './components/loginsignup/LogSign';
import Protected from './components/Protected/Protected';
import Product from "./pages/Product";

function App() {

  return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Book/>}/>
            <Route path='/poem' element={<BookCategory  category="poem"/>}/>
            <Route path='/fiction' element={<BookCategory  category="fiction"/>}/>
            <Route path='/non-fiction' element={<BookCategory  category="non-fiction"/>}/>
            <Route path='/product' element={<Product/>}>
               <Route path=':productId' element={<Product/>}/>
            </Route>

            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/logsign" element={<Protected><LogSign/></Protected>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>  
      </div>
  );
};

export default App;
