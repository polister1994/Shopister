/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
function Item ({ item }) {


    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {item?.map((product) => (
        <div className=" m-5 p-5 bg-sky-950 flex flex-col items-center justify-evenly gap-8 h-auto" key={product.id} > 
            <div >
                <img className="h-64" src={product.url} alt="Imagen de Producto" />
            </div>
            <div className=" w-full h-auto text-center " >
                <p >Precio: ${product.price}</p>
                <p >Producto: {product.name}</p>
                <p className=" overflow-y-hidden h-32" >Descripcion: <br></br> {product.description}</p>
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