import { Button } from "antd"

function CardsProductos(props) {
  return (
    <div className="product--card">
        <img className="img__product" src="/icon.png" alt="" />
        <h3>{props.name}</h3>
        <Button>Agregar al Carrito</Button>
    </div>
  )
}

export default CardsProductos