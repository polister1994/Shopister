function CartWidget (propBtnCart){
    return <button className="cart"
    onClick={propBtnCart.callback} >
                <img className="cartImg" src="..\..\src\assets\cart-icon.png" alt="" />
                <p className="cartNumber">5</p>
            </button>
}

export default CartWidget