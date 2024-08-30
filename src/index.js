import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BookcontextProvider from './context/BookContext';
import {UserAuthContextProvider} from './context/UserAuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BookcontextProvider>
    <UserAuthContextProvider>
        <App />
    </UserAuthContextProvider> 
  </BookcontextProvider>
);


