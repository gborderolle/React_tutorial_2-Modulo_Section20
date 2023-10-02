import { useSelector, useDispatch } from 'react-redux'; // llama a los métodos del redux y trae las propiedades
import { cartActions } from '../../store/cart-slice'; // llama a los métodos del redux

import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;

  const dispatch = useDispatch(); // llama a los métodos del redux
  // const counterRedux = useSelector((state) => state.cart.totalQuantity); // muestra la propiedad totalQuantity del redux
  // const totalAmountRedux = useSelector((state) => state.cart.totalAmount); // muestra la propiedad totalAmount del redux

  const addItemHandler = () => {
    dispatch(cartActions.addItem(
      {
        id, title, price
      }
    ));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(id));
  };

  const incrementHandler = () => {
    dispatch(cartActions.increment());
  };

  const decrementHandler = () => {
    dispatch(cartActions.decrement());
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
