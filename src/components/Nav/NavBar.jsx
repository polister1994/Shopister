import CartWidget from './CartWidget.jsx'

function NavBar (){
    return <div className='flexnav'>
    <nav className="nav">
        <a href="/">Shopister</a>
        <ul className="navUl">
            <li>
                <a href="/">Ropa</a>
            </li>
            <li>
                <a href="/">Componentes Electronicos</a>
            </li>
            <li>
                <a href="/">Joyeria</a>
            </li>
        </ul>
    </nav>
    <CartWidget/>
    </div>
}

export default NavBar
