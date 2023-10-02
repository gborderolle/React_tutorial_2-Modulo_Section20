import { useDispatch } from 'react-redux'; // llama a los métodos del redux
import { cartActions } from '../../store/cart-slice'; // llama a los métodos del redux

import Card from '../UI/Card';

import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { id, title, price, description } = props;

  const dispatch = useDispatch(); // llama a los métodos del redux

  const addItemHandler = () => {
    dispatch(cartActions.addItem(
      {
        id,
        title,
        price,
        description,
      }
    ));
  };

  const incrementHandler = () => {
    dispatch(cartActions.increment());
  };

  const decrementHandler = () => {
    dispatch(cartActions.decrement());
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Agregar</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
