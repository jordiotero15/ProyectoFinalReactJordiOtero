import { BrowserRouter } from "react-router-dom"
import Footer from "./componentes/Footer.jsx"
import Main from "./componentes/Main.jsx"
import NavBar from "./componentes/NavBar.jsx"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App
