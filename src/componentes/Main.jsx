import { Route, Routes } from "react-router-dom";
import Contacto from "./pages/Contacto";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import Ayuda from "./pages/Ayuda";



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
      </Routes>
    </main>
  )
}
export default Main