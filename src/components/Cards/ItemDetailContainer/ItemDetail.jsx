import ItemCount from "../ItemCount/ItemCount"
import style from "./ItemDetailContainer.module.css"


function ItemDetail ({item}) {
    if(item)
    return(
        <>
            <section className={style.detailFlex}>
                <div className={style.detailDivImage}>
                    <img className="h-128" src={item.url} alt="Imagen de Producto" />
                </div>
                <div className="flex flex-col gap-10 w-96">
                    <div className={style.detailDescriptionFlex}>
                    <h3 className={style.detailTitle}>{item.name}</h3>
                    <h4 className={style.detailPrice}>${item.price}</h4>
                    <p className={style.detailProductDescription}>{item.description}</p>
                    </div> 
                    <div className={style.detailButtons}>
                        <ItemCount item = {item}/>
                    </div>
                </div>              
            </section>
        </>
    )
    
}
export default ItemDetail
