import React from 'react';
import Currency_Converter from './components/Currency_Converter';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import FavoriteCurrencyPairs from './components/FavoriteCurrencyPairs';
function App() { 
 
  return (
    <div className=''>
    <Router basename="/">
      <NavBar />
      <div className='min-h-screen  font-family-teachers rounded-lg flex flex-col items-center justify-center '>
   
          <Currency_Converter />  
      
  
      </div>
      
      <FavoriteCurrencyPairs />
      <Footer />
    
    </Router>
  </div>
  );
}

export default App;
