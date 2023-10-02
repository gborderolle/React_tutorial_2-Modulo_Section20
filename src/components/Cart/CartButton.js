import { useSelector, useDispatch } from 'react-redux'; // llama a los métodos del redux y trae las propiedades
import { uiActions } from '../../store/ui-slice';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch(); // llama a los métodos del redux
  const counterRedux = useSelector((state) => state.cart.totalQuantity); // muestra la propiedad totalQuantity del redux

  const toggleHandler = () => {
    dispatch(uiActions.toogleUI());
  };

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>Carrito</span>
      <span className={classes.badge}>{counterRedux}</span>
    </button>
  );
};

export default CartButton;
