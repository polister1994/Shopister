import { useState,useContext} from "react"
import style from "./ItemCount.module.css"
import { CartContext } from "../../Context/cartContext";

function ItemCount({item}){
    

    const {addToCart} = useContext(CartContext);
    const handleAddToCart = () =>{
        addToCart({...item, prods: count})
        
    }
    const [count, setCount] = useState(0);
    
    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubstract = () => {
        setCount(count - 1)
    }

    return(
        <>
            <div className={style.countFlex}>
            <p>{count}</p>
            </div>   
            <div className={style.counterBtns}>
                <button onClick={handleSubstract} disabled={count < 1}>
                    -
                </button>
                <button onClick={handleAdd}>
                    +
                </button>
            </div>
            <button onClick={handleAddToCart} disabled={ count < 1 }>
                            Agregar al Carrito
            </button>
        </>     
    )
    
}

export default ItemCount