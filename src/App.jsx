import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Style.css';
import NavBar from './components/Nav/NavBar';
import Home from './pages/home/home.jsx'
import ItemListContainer from './components/Cards/ItemListContainer';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const url = window.location.pathname;
  const isRoot = url.endsWith('/');

  return (
    <BrowserRouter>
      {isRoot ? (
        <>
          <Routes>
            <Route path='/' element={<Home label='Indumentaria de prueba label'/>}/> 
          </Routes>
        </>
      ) : (
        <>
          <NavBar/>
          <Routes>
            <Route path='/Itemlist' element={<ItemListContainer label='Indumentaria de prueba label'/>}/> 
          </Routes>
          <Footer footerDir='Esto es una direccion' numContFooter='esto es un numero' /> 
        </>
      )}
    </BrowserRouter>
  );
}

export default App
