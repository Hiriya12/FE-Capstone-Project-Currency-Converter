import React from 'react';
import Currency_Converter from './components/Currency_Converter';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
function App() { 
  // currencies: https://v6.exchangerate-api.com/v6/0029b7b8238cee301c198867/latest/USD
  // max-w-xl mx-auto conversion: https://v6.exchangerate-api.com/v6/0029b7b8238cee301c198867/pair/EUR/GBP

  return (
    <Router basename="/">
      <NavBar />
      <div className='min-h-screen bg-gray-100 font-family-teachers rounded-lg flex flex-col items-center justify-center '>
        <div className='container'>
          <Currency_Converter />  
          
        </div>
      </div>
      
      <Footer />
    
    </Router>
  
  );
}

export default App;
