import { CartContext } from "./cartContext";
import { useState } from "react";

function CartProvider ( { children } ) {
    const[cart, setCart] = useState([])
    const addToCart = (item) => {
        setCart(prevCart => {
            const cartItem = prevCart.find(cartItem => cartItem.id === item.id);
            
            if (cartItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, prods: cartItem.prods + item.prods }
                        : cartItem
                );
            } else {
                return [...prevCart, item];
            }
        });
    };
    

    const getProds = () => {
        const productos = cart.map(item => item.prods)
        const sumaDeProductos = productos.reduce((acc,current) => acc + current , 0)
        return sumaDeProductos
    } 

    function borrarProducto(id){
        setCart((prevCart) => prevCart.filter(product => product.id !== id));

    }

    function vaciarCarrito(){
        setCart([])
    }

    function sumPrices (){
        return cart.reduce((total, item) => total + ((item.price || 0) * item.prods), 0);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, getProds, borrarProducto, vaciarCarrito, sumPrices}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;