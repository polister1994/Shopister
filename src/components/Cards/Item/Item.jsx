/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
function Item ({ item }) {

    return (
        <section>
        {item?.map((product) => (
        <div  key={product.id} > 
            <div >
                <img  src={product.url} alt="Imagen de Producto" />
            </div>
            <div >
                <p >Precio: ${product.price}</p>
                <p >Producto: {product.name}</p>
                <p className="text-3xl font-bold underline">Descripcion: <br></br> {product.description}</p>
            </div>
            <Link to={`/item/${product.id}`}>
                Ver detalle
            </Link>
        </div>
        ))}
        </section>
    )
} 

export default Item