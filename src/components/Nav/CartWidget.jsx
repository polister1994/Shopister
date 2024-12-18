import style from './NavBar.module.css'

function CartWidget (propBtnCart){
    return <button className={style.cart}
    onClick={propBtnCart.callback} >
                <img className={style.cartImg} src="..\..\src\assets\cart-icon.png" alt="imagen del carrito de compras" />
                <p className={style.cartNumber}>5</p>
            </button>
}

export default CartWidget