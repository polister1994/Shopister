import style from '../NavBar.module.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/cartContext'
import { Link } from "react-router-dom";

function CartWidget (){
    const { getProds } = useContext(CartContext)
    return <Link to="/Cart" className={style.cart}>
                <img className={style.cartImg} src="..\..\src\assets\cart-icon.png" alt="imagen del carrito de compras" />
                <p className={style.cartNumber}>{getProds()}</p>
            </Link>
}

export default CartWidget