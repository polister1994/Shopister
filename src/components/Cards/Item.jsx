/* eslint-disable react/prop-types */
import style from "./Item.module.css"

function Item ({ item, callback }) {
    
    return (
        <section className={style.cardsFBox}>
        {item?.map((product) => (
        <div className={style.productCards} key={product.id} > 
            <div className={style.divCards}>
                <img className={style.imgCard} src={product.image} alt="Imagen de Producto" />
            </div>
            <div className={style.cardContent}>
                <p className="productPrice">{product.price}</p>
                <p className="productDescription">{product.title}</p>
                <p className="productDescription">{product.description}</p>
            </div>
            <button className={style.btnCard}
                onClick={callback} >
                Agregar al carrito
            </button>
        </div>
        ))}
        </section>
    )
} 

export default Item