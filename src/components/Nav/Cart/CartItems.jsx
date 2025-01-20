import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import { Link } from "react-router-dom";


function CartItems () {
    
    const { cart , borrarProducto, vaciarCarrito, sumPrices } = useContext(CartContext)



    if (!cart || cart.length === 0) {
        return <h2 className="text-center text-xl m-52">Porfavor agregar algún producto al carrito</h2>;
    }

    return (
        <section className="flex flex-col gap-5 justify-center items-center" >
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {cart.map(product => (
                    <section key={product.id}>
                        <div className=" m-5 p-5 bg-sky-950 flex flex-col items-center justify-evenly gap-8 h-auto w-64">
                            <img className="h-64" src={product.url} alt="imagen del producto" />
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
            </section>
            <div className="flex flex-col gap-2 text-center">
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



