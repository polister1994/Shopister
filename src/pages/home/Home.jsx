import style from "./Home.module.css"
import useNavigateTo from "../../components/useNavigateTo";


const Home = () => {
    const navigateTo = useNavigateTo();

    return(<section className={style.sectionHome}>
                <div className={style.shopTitleHome}>
                    <h1> Shopister </h1>
                    <h2> Tu tienda Online desde la comodidad de tu casa </h2>
                    <button className={style.btnHome} onClick={() => navigateTo("/ItemList")}>
                        Explorar
                    </button>
                </div>
                <div className={style.backgroundHome}/>
            </section>
    ) 
}

export default Home