import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const logout = useSelector((state) => state.logout);

  const toggleHandler = () => {
    dispatch(cartActions.toogleCart());
  };

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
