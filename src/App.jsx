
import './Style.css';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/Cards/ItemListContainer';
import Footer from './components/Footer/Footer.jsx';

function App() {
  
  return (

    <>
      <NavBar/>
      <ItemListContainer label='Indumentaria de prueba label'/>
      <Footer footerDir='Esto es una direccion' numContFooter='esto es un numero' />
    </>
    

  )
}

export default App
