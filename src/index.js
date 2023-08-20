import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free";
import "react-router-dom"
import "react-dom"
import 'axios'
import { BrowserRouter } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <React.StrictMode>
    <BrowserRouter>
      <App />

    </BrowserRouter>
  </React.StrictMode>
);


