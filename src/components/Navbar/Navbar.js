import Buttons from "./Buttons/Buttons"
import CartWidget from "./CartWidget/CartWidget"


const Navbar = () => {
    return (
      <div className="navbar">
				<h1>Mi E-Commerce</h1>
				<Buttons />
				<CartWidget />
      </div>
    )
}

export default Navbar