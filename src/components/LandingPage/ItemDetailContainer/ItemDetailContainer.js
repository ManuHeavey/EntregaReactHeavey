import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getProductsById } from "../../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
 
    useEffect(() => {
        setLoading(true)
        getProductsById(itemId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <div className="itemListContainer">
            <h1>Detalle de producto</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer