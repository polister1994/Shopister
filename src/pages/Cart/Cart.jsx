import { useState, useEffect} from "react";
import CartItems from "../../components/Nav/Cart/CartItems";
import { useContext } from "react";
import { CartContext } from "../../components/Context/cartContext";

function Cart (){

    const { cart } = useContext(CartContext)
    
    let totalPrice = 0

    const [uds, setUds]= useState(cart)


    const handleAdd = (id) => {
        setUds(prevProductos =>
        prevProductos.map(producto =>
            producto.id === id && producto.prods > 1 ? { ...producto, prods: producto.prods + 1 } : producto
        )
        );
        console.log(uds)
    };

    const handleSubstract = (id) => {
        setUds(prevProductos =>
        prevProductos.map(producto =>
            producto.id === id && producto.prods > 1 ? { ...producto, prods: producto.prods - 1 } : producto
        )
        );
        console.log(uds)
    };

    return (
        <CartItems totalPrice = {totalPrice} handleAdd={handleAdd} handleSubstract={handleSubstract} uds={uds}/>
    )
}
export default Cart