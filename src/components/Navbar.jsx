import Cart from './Cart.jsx'

function Navbar (){
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
    <Cart/>
    </div>
}


export default Navbar
