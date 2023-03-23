import shoppingCart from "img/shopping-cart.png"

const CartWidget = () => {
    return (
      <div>
        <img src={shoppingCart} alt="shopping cart" width={50}></img>
        <span className="cartNumber">{0}</span>
      </div>
    )
}

export default CartWidget