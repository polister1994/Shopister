/* eslint-disable react/prop-types */
import style from "./Footer.module.css"

function Footer({footerDir, numContFooter}){

    return (
        <section className={style.sectionFooter}>
            <div className={style.divLogo}>
                <img src="" alt="LogoWeb" />
            </div>
            <div className={style.divFooterInfo}>
                <h3>Contactanos:</h3>
                <p>Direccion:{footerDir}</p>
                <p>Numero de Contacto: {numContFooter}</p>
            </div>
            <div className={style.divFooterSocialMedia}>
                <img src="" alt="Logo Instagram" />
                <img src="" alt="Logo Facebook" />
                <img src="" alt="Logo X" />
            </div>
        </section>
    )
}

export default Footer