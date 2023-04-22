import React, { useState } from 'react'
import Swal from 'sweetalert2';

const ItemDetail = ({ name, price, img, description}) => {
    const [count, setCount] = useState(0)
    
    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    };
    
    const handleIncrease = () => {
        setCount(count + 1)
    };
    
    const handleConfirm = (e) => {
        e.preventDefault();
        if (count > 0) {
          const newItem = { name, price, count };
          const itemsInCart = JSON.parse(sessionStorage.getItem('cartItems')) || [];
          sessionStorage.setItem('cartItems', JSON.stringify([...itemsInCart, newItem]));
          setCount(0);
          Swal.fire({
            title: "¡Agregado al carrito!",
            text: "Redirigiendo a página principal",
            icon: "success",
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
          }).then(() => {
            window.location.href = "/";
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Seleccione la cantidad de productos a agregar al carrito",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      };
      
    return (
        <div className="product">
            <h2>{name}</h2>
            <h3>$ {price}</h3>
            <img className="productImage" src={img} alt={name}/>
            <p>Descripcion: {description}</p>
            <div className="counter">
                <button className='counterBtn' onClick={handleDecrease}>-</button>
                <span>{count}</span>
                <button className='counterBtn' onClick={handleIncrease}>+</button>
            </div>
            <button className='detailBtn' onClick={handleConfirm}>Confirmar</button>
        </div>
    )
}

export default ItemDetail
