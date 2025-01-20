import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import NavBar from './components/Nav/NavBar.jsx'
import Footer from "./components/Footer/Footer.jsx"
import ItemListContainer from './components/Cards/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/Cards/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Error404 from './pages/Error/Error404.jsx'
import Checkout from './components/Checkout/Checkout.jsx';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListContainer />}/> 
              <Route path='/category/:category' element={<ItemListContainer/>}/> 
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>   
              <Route path='/Cart' element={<Cart/>}/>     
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='*' element={<Error404/>}/>      
          </Routes>
      <Footer footerDir=" Belgrano 5343 09Hs a 20Hs" numContFooter="112223334455" />   
    </BrowserRouter>
  );
}

export default App
