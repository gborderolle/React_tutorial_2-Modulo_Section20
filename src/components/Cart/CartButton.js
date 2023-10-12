import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch(); // llama a los métodos del redux
  const cartQuantity = useSelector((state) => state.cart.totalQuantity); // muestra la propiedad totalQuantity del redux

  const toggleCartHandler = () => {
    dispatch(uiActions.toogleUI());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
