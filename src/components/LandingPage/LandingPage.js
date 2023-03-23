import { BrowserRouter, Routes, Route } from "react-router-dom"

import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./ItemListContainer/ItemListContainer"

const LandingPage = ( category ) => {
    return (
      <div>
          <Routes>
            <Route path="/" element={<ItemListContainer greetings = {`Bienvenidos a mi E-Commerse`}/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer greetings = {`Productos filtrados por la categoria de ${category}`}/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          </Routes>
      </div>
    )
}

export default LandingPage