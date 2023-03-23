import { NavLink } from "react-router-dom"
import Buttons from "./Buttons/Buttons"
import CartWidget from "./CartWidget/CartWidget"

const Navbar = () => {
    return (
      <nav className="navbar">
				<NavLink to='/' className="logo"><h1>MannE-Commerce!</h1></NavLink>
        <Buttons/>
				<CartWidget />
      </nav>
    )
}

export default Navbar