import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import { Link } from "react-router-dom";


function CartItems () {
    
    const { cart , borrarProducto, vaciarCarrito, sumPrices } = useContext(CartContext)



    if (!cart || cart.length === 0) {
        return <h2>Porfavor agregar algún producto al carrito</h2>;
    }

    return (
        <section>
            {cart.map(product => (
                <section key={product.id}>
                    <div>
                        <img src={product.url} alt="imagen del producto" />
                        <p>Producto: {product.name}</p>
                        <p>Precio: ${product.price}</p>
                        <p>Cantidad: {product.prods} Unidades</p>
                        <p>Total del producto: ${product.price * product.prods}</p>
                        <button onClick={() => borrarProducto(product.id)}>
                            Eliminar Producto
                        </button>
                    </div>
                </section>
            ))}
            <div>
                <p>Total a pagar: $ {sumPrices()} </p>
                <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
                <button>
                    <Link to="/checkout">
                        Confirmar Compra
                    </Link>
                </button>
            </div>
        </section>
    );
}


export default CartItems



