import { Route, Routes } from "react-router-dom";
import Contacto from "./pages/Contacto";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";



function Main() {

  return (
    <main className="p-4 text-black grow mi-main">
      <Routes>
        <Route path='/' element={<ItemListContainer />} />

        <Route path='/inicio' element={<ItemListContainer />} />

        <Route path='/category/:category' element={<ItemListContainer />} />

        <Route path="/producto/:id" element={<ItemDetailContainer />} />

        <Route path='/contacto' element={<Contacto />} />
      </Routes>
    </main>
  )
}
export default Main