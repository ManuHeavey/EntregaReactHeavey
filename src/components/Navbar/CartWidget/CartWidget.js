import shopping_cart from "../../../img/shopping-cart.png"

const CartWidget = () => {
    return (
      <div>
        <img src={shopping_cart} alt="shopping cart" width={50}></img>
        <span className="cartNumber">{0}</span>
      </div>
    )
}

export default CartWidget