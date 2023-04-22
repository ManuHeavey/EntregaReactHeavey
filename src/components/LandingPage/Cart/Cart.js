import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState()

  useEffect(() => {
    const items = JSON.parse(sessionStorage.getItem('cartItems'));
    setCartItems(items || []);
  }, []);

  const handleRemove = (itemIndex) => {
    const items = [...cartItems];
    const removedItem = items.splice(itemIndex, 1)[0];
    sessionStorage.setItem('cartItems', JSON.stringify(items));
    setCartItems(items);
    setCartQuantity(prevCartQuantity => prevCartQuantity - removedItem.count);
    window.location.reload();
  };
    
  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.price * item.count);
  }, 0);

  const handleCheckout = () => {
    Swal.fire({
      title: 'Gracias por tu compra',
      text: 'Redirigiendo al catálogo',
      icon: 'success',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false
    }).then(() => {
        setCartQuantity(0);
        sessionStorage.removeItem('cartItems');    
      window.location.href = '/';
    });
  };

  return (
    <div className="cartList">
      <h2>Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.count}</p>
              <button className='detailBtn' onClick={() => handleRemove(index)}>Remover</button>
            </div>
          ))}
          <h4 className='total'>Total: ${totalPrice}</h4>
          <button className='detailBtn' onClick={handleCheckout}>Comprar</button>
        </div>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  );
};

export default Cart;
