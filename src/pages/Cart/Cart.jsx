import Style from "./Cart.module.css" 
import { useContext } from "react"

function Cart() {


    return(
        <section className={Style.CartSection}>
            <div className={Style.div}>
                <p>1</p>
            </div>
            <div className={Style.div}>
                <p>2</p>
            </div>
            <div className={Style.div}>
                <p>3</p>
            </div>

        </section>
    )
}

export default Cart