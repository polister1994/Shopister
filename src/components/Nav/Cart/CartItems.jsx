import { useContext } from "react";
import { CartContext } from '../../Context/cartContext'


function CartItems ({totalPrice,handleAdd,handleSubstract, uds}) {
    
    const { cart } = useContext(CartContext)

    return (
            <section>
                {cart.map(product => (
                    <section key={product.id}>
                        <div>
                            <img src={product.url} alt="imagen del producto" />
                            <p>Producto: {product.name}</p>
                            <p>Precio: ${product.price}</p>
                            <p>Cantidad: {product.prods} Unidades</p>
                            {totalPrice = totalPrice+(product.price*product.prods)}
                        </div>
                        <div>
                            <button onClick={() => handleSubstract(product.id)} disabled={uds[product.prods] < 1}>-</button>
                            <button onClick={() => handleAdd(product.id)}>+</button>
                            <button>X</button>
                        </div>
                    </section>
                )) }
                <div>
                    <p>Total a pagar: $ {totalPrice} </p>
                    <button>
                        Confirmar Compra
                    </button>
                </div>
            </section>
    )
}


export default CartItems