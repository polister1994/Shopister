import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer"
import NavBar from "../components/Nav/NavBar"

const AppLayout = ({nav, footer}) => {
    return (
        <>
            {nav && <NavBar/>}
            <Outlet/>
            {footer && <Footer footerDir='Buenos aires, Obelisco 5324' numContFooter='11122233344' /> }
        </>
    )
}


export default AppLayout;