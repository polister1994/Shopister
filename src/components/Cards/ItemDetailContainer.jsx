import ItemCount from "./ItemCount"
import {useFetch} from "../useFetch"
import {useParams} from 'react-router-dom'
import style from "./ItemDetailContainer.module.css"


function ItemDetailContainer () {

    const {id} = useParams();
    
const { item, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}` );

if(loading ) {
    return (
        <>
            <p>Cargando....</p>
        </>
    )
} else  {
    return (
        <>
            {error && <p>Error al cargar la pagina intente nuevamente</p>}
            <section className={style.detailFlex}>
                <div className={style.detailDivImage}>
                    <img src={item.image} alt="Imagen de Producto" />
                </div>
                <div className={style.detailContent}>
                    <div className={style.detailDescriptionFlex}>
                    <h3 className={style.detailTitle}>{item.title}</h3>
                    <h4 className={style.detailPrice}>{item.price}</h4>
                    <p className={style.detailProductDescription}>{item.description}</p>
                    </div> 
                    <div className={style.detailButtons}>
                        <ItemCount/>
                        <button>
                            Agregar al Carrito
                        </button>
                    </div>
                </div>              
            </section>
        </>
    )
}
    
} 

export default ItemDetailContainer