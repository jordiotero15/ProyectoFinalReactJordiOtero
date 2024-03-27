import { Button } from "antd"

function CardsProductos(props) {
  return (
    <div className="productCard">
        <img src="/icon.png" alt="Producto Whey Protein" />
        <h4>{props.name}</h4>
        <h5>{props.precio}</h5>
        <Button>Agregar al Carrito</Button>
    </div>
  )
}

export default CardsProductos