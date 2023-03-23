import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div className="itemContainer">
            {
                 products.map(product => {
                    return <Item {...product}/>
                })
            }
        </div>
    )
}

export default ItemList