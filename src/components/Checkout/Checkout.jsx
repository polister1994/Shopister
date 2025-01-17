import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import { createOrder } from "../../firebase/db";
import { serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


function Checkout(){
    const { cart, sumPrices, vaciarCarrito } = useContext(CartContext)
        const navigate = useNavigate()

    const handleSubmit = e =>{
        e.preventDefault()

        const form = e.target
        const [email,name,phone] = form

        const order = {
            buyer: {name: name.value,email: email.value,phone: phone.value},
            total: sumPrices(),
            items: cart,
            time: serverTimestamp()
        }
        createOrder(order);

        setTimeout(() => {
            navigate("/")
            vaciarCarrito()
        }, 3000);
        
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "50vw", justifyContent: "center", margin: "5rem auto", gap:"1rem" }}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="name" placeholder="Ingresa tu Nombre" title="Por favor ingresa un Nombre válido" required />
            
            <label htmlFor="correo">Correo Electrónico:</label>
            <input type="text" id="email" placeholder="Correo Electrónico" title="Por favor ingresa un correo electrónico válido" required />
            
            <label htmlFor="telefono">Número de Teléfono:</label>
            <input type="number" id="phone" placeholder="Número de Teléfono" title="Por favor ingresa un Número válido" required />
            
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Checkout