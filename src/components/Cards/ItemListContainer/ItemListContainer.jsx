import ItemList from '../ItemList/ItemList';
import { useState, useEffect} from "react";
import { getProducts, getProductsByCategory } from '../../../firebase/db';
import { useParams } from 'react-router-dom';

function ItemListContainer (){
    const [item, setItems]= useState(null)
    const {category} = useParams()

useEffect(() => {

    category ? getProductsByCategory(category, setItems) : getProducts(setItems)

}, [category])

    return (
        <>
            <ItemList item={item} />
        </>
    )
}
export default ItemListContainer