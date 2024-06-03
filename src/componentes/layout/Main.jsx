import { Route, Routes } from "react-router-dom";
import Contacto from "../pages/Contacto";
import ItemDetailContainer from "../widgets/ItemDetailContainer";
import ItemListContainer from "../widgets/ItemListContainer";
import Ayuda from "../pages/Ayuda";
import CartWidget from "../pages/CartWidget";



function Main() {

  return (
    <main className="text-black grow mi-main">
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/inicio' element={<ItemListContainer />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/ayuda' element={<Ayuda />} />
        <Route path='/cart' element={<CartWidget />} />
      </Routes>
    </main>
  )
}
export default Main