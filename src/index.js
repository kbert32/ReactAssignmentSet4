import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
// import ProductsProvider from './context/products-context';   //only needed when using Context
import configureStore from './hooks-store/products-store';

configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ProductsProvider>     //only needed when using Context
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </ProductsProvider>
);
