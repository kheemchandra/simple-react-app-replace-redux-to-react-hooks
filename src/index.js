import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';   
import ConfigureStore from './hook-store/products-store';

ConfigureStore();

ReactDOM.render( 
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);
