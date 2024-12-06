import ItemList from './ItemList';
import {useFetch} from "./useFetch"

function ItemListContainer (){
    const {item , loading, error } = useFetch('https://fakestoreapi.com/products')
    return (
        <>
            {loading && <p>Cargando....</p>}
            {error && <p>Error al cargar la pagina intente nuevamente</p>}
            <ItemList item={item} />
        </>
    )
}
export default ItemListContainer