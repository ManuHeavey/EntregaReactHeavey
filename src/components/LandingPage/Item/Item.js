import { Link } from "react-router-dom"

const Item = ({ id, name, price, img }) => {
    return (
        <div className="product">
            <h2>{name}</h2>
            <h3>$ {price}</h3>
            <img className="productImage" src={img} alt={name}></img>
            <Link to={`/item/${id}`} ><button className="detailBtn">Ver Detalle</button></Link>
        </div>
    )
}

export default Item