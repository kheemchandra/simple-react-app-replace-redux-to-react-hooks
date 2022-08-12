import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';  
import StoreContextProvider from './context/context-store';

ReactDOM.render(
  <StoreContextProvider> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </StoreContextProvider>,
  document.getElementById('root')
);
