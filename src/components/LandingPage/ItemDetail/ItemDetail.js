const ItemDetail = ({ name, price, img, description }) => {
    return (
        <div className="product">
            <h2>{name}</h2>
            <h3>$ {price}</h3>
            <img className="productImage" src={img} alt={name}/>
            <p>Descripcion: {description}</p>
        </div>
    )
}

export default ItemDetail