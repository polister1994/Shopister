/* eslint-disable react/prop-types */
import style from "./Item.module.css"
import { Link } from "react-router-dom"

function Item ({ item }) {

    return (
        <section className={style.cardsFBox}>
        {item?.map((product) => (
        <div className={style.productCards} key={product.id} > 
            <div className={style.divCards}>
                <img className={style.imgCard} src={product.image} alt="Imagen de Producto" />
            </div>
            <div className={style.cardContent}>
                <p className={style.producPrice}>{product.price}</p>
                <p className={style.productDescription}>{product.title}</p>
                <p className={style.productDescription}>{product.description}</p>
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