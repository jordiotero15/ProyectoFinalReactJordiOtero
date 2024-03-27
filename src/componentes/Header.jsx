import NavBar from "./NavBar"

function Header() {
    return (
        <header className="bg-slate-400 p-4">
            <img className="img__icon" src="/icon.png" alt="Suplementos" />
            <h1 id="titulo" className="encabezado">Suplementos Uruguay</h1>
            <NavBar />
        </header>
    )
}

export default Header