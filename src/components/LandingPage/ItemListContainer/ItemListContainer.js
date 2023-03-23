import { useEffect, useState } from 'react'

import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../../asyncMock"


const ItemListContainer = ({greetings}) => {
  const [productsState, setProductsState] = useState([])

  useEffect(() => {
      getProducts()
          .then(products => {
              setProductsState(products)
          })
  }, [])

    return (
      <div className="itemListContainer">
        <h3>{greetings}</h3>
        <ItemList products={productsState}/>
      </div>
    )
}

export default ItemListContainer