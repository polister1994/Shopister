import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './Style.css';
import NavBar from './components/Nav/NavBar.jsx'
import Footer from "./components/Footer/Footer.jsx"
import ItemListContainer from './components/Cards/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/Cards/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Error404 from './pages/Error/Error404.jsx'


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListContainer label='Indumentaria de prueba label'/>}/> 
              <Route path='/:category/:prod' element={<ItemListContainer label='Indumentaria de prueba label'/>}/> 
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>   
              <Route path='/Cart' element={<Cart/>}/>     
              <Route path='*' element={<Error404/>}/>      
          </Routes>
      <Footer/>   
    </BrowserRouter>
  );
}

export default App
