import style from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className={style.sectionHome}>
            <div className={style.shopTitleHome}>
                <h1> Shopister </h1>
                <h2> Tu tienda Online desde la comodidad de tu casa </h2>
                <Link to='/ItemList' className={style.btnHome}>
                    Explorar
                </Link>
            </div>
            <div className={style.backgroundHome} />
        </section>
    );
}

export default Home