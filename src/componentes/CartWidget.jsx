import { ShoppingCartIcon } from "lucide-react"

function CartWidget() {
    return (
        <div className="carrito">
            <ShoppingCartIcon />
            <p>0</p>
        </div>
    )
}

export default CartWidget