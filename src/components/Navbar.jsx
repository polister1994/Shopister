import CartWidget from './CartWidget.jsx'

function NavBar (){
    return <div className='flexnav'>
    <nav className="nav">
        <a href="/">Shopister</a>
        <ul className="navUl">
            <li>
                <a href="/">Procesadores</a>
            </li>
            <li>
                <a href="/">Tarjetas Graficas</a>
            </li>
            <li>
                <a href="/">Monitores</a>
            </li>
        </ul>
    </nav>
    <CartWidget/>
    </div>
}

export default NavBar
