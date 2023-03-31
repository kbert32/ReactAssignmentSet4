import React from 'react';
// import { useContext } from 'react';      //only needed when using Context

import FavoriteItem from '../components/Favorites/FavoriteItem';
// import { ProductsContext } from '../context/products-context';     //only needed when using Context
import { useStore } from '../hooks-store/store';
import './Products.css';

const Favorites = props => {
  // const favoriteProducts = useContext(ProductsContext).products.filter(p => p.isFavorite);     //only needed when using Context
  const favoriteProducts = useStore()[0].products.filter(p => p.isFavorite);
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
