import CartWidget from './Cart/CartWidget'
import style from './NavBar.module.css'
import { Link } from "react-router-dom";

function NavBar (){
    return <div className={style.flexnav}>
    <nav className={style.nav}>
        <Link to='/'>
            Shopister
        </Link>
        <ul className={style.navUl}>
            <li  className={style.navLi}>
                <Link to="/category/men's clothing">
                    Ropa de Caballero
                </Link>
            </li>
            <li  className={style.navLi}>
                <Link to="/category/women's clothing">
                    Ropa de Dama
                </Link>
            </li>
            <li  className={style.navLi}>
                <Link to="/category/electronics">
                    Electronicos
                </Link>
            </li>
            <li  className={style.navLi}>
                <Link to="/category/jewelery">
                    Joyeria
                </Link>
            </li>
        </ul>
    </nav>
    <CartWidget/>
    </div>
}

export default NavBar
