import { CartContext } from "./cartContext";
import { useState } from "react";

function CartProvider ( { children } ) {
    const[cart, setCart] = useState([])
    const addToCart = (item) => {
        if(item.id in cart) {
            const newItem = cart[item.id] = {
                ...cart[item.id],
                prods : cart[item.id].prods +  item.prods
            }
            setCart(e => {
                return {
                    ...e , [item.id] : newItem
                }
            })
        } else {
            setCart(e => {
                return {
                    ...e , [item.id] : item
                }
            })
        }

        setCart([...cart, item]);
    }

    const getProds = () => {
        const productos = cart.map(item => item.prods)
        const sumaDeProductos = productos.reduce((acc,current) => acc + current , 0)
        
        return sumaDeProductos
    } 

    return (
        <CartContext.Provider value={{cart, addToCart, getProds}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;