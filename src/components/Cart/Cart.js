import { useSelector } from 'react-redux'; // llama a los métodos del redux y trae las propiedades

import Card from '../UI/Card';
import CartItem from './CartItem';

import classes from './Cart.module.css';

const Cart = (props) => {
  const itemsRedux = useSelector((state) => state.cart.items); // muestra la propiedad totalQuantity del redux

  return (
    <Card className={classes.cart}>
      <h2>Tu carrito de compras</h2>
      <ul>
        {itemsRedux.map(item => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
