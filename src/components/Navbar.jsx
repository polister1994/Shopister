import Cart from './Cart.jsx'

function Navbar (){
    return <nav className="nav">
        <a href="/">Shopister</a>
        <ul className="navUl">
            <li>
                <a href="/procesadores">Procesadores</a>
            </li>
            <li>
                <a href="graficas">Tarjetas Graficas</a>
            </li>
            <li>
                <a href="monitores">Monitores</a>
            </li>
        </ul>
    </nav>
}


export default Navbar