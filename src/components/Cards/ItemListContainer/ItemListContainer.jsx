import ItemList from '../ItemList/ItemList';
import {useFetch} from "../../../Hooks/useFetch"
import { useParams } from 'react-router-dom';

function ItemListContainer (){

    const {prod, category} = useParams()

    const fetchUrl = category 
    ? `https://fakestoreapi.com/products/${category}/${prod}` 
    : `https://fakestoreapi.com/products/`;

const { item, loading, error } = useFetch(fetchUrl);


    return (
        <>
            {/* <NavBar/> */}
                {loading && <p>Cargando....</p>}
                {error && <p>Error al cargar la pagina intente nuevamente</p>}
                <ItemList item={item} />
            {/* <Footer footerDir='Buenos aires, Obelisco 5324' numContFooter='11122233344' /> */} 
        </>
    )
}
export default ItemListContainer