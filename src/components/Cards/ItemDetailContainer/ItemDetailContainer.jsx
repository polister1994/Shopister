import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { getProd } from "../../../firebase/db"
import { useParams } from "react-router-dom"

function ItemDetailContainer() {

    const [item, setItem] = useState()
    const {id} = useParams()

    useEffect(() => {
        getProd(id, setItem)
    }, [id])

    return (
        <>
        <ItemDetail item = {item}/>
        </>
    )
}

export default ItemDetailContainer