import { useState, useEffect } from 'react';
import shoppingCart from '../../../img/shopping-cart.png';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const itemsInCart = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    setCartItems(itemsInCart);
  }, []);

  return (
    <NavLink to='/cart' className="cartLink">
      <div>
        <img src={shoppingCart} alt="shopping cart" width={50}></img>
        <span className="cartNumber">{cartItems.length}</span>
      </div>
    </NavLink>

  );
};

export default CartWidget;
