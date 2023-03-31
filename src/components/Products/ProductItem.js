import React from 'react';
// import { useContext } from 'react';      //only needed when using Context
import Card from '../UI/Card';
// import { ProductsContext } from '../../context/products-context';      //only needed when using Context
import { useStore } from '../../hooks-store/store';
import './ProductItem.css';

const ProductItem = React.memo(props => {
  // console.log("RENDERING");
  // const toggleFav = useContext(ProductsContext).toggleFav;     //only needed when using Context
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    // toggleFav(props.id);
    dispatch('TOGGLE_FAV', props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
