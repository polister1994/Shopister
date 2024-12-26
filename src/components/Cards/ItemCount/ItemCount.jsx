import { useState } from "react"
import style from "./ItemCount.module.css"

function ItemCount(){

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
        </>     
    )
    
}

export default ItemCount