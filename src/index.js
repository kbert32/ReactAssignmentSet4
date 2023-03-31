import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';                //only needed for redux
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
// import productReducer from './store/reducers/products';  //only needed for redux
import ProdProvider from './context/products-context';

// const rootReducer = combineReducers({                  //only needed for redux
//   shop: productReducer
// });

// const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ProdProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProdProvider>,
);
// root.render(<App />);