import React from 'react';
// import { useContext } from 'react';      //only needed when using Context
import ProductItem from '../components/Products/ProductItem';
// import { ProductsContext } from '../context/products-context';     //only needed when using Context
import { useStore } from '../hooks-store/store';
import './Products.css';

const Products = props => {
  // const productList = useContext(ProductsContext).products;      //only needed when using Context
  const state = useStore()[0];      //only need the state, not the dispatch

  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
