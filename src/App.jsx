import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Style.css';
import Home from './pages/Home/Home.jsx'
import ItemListContainer from './components/Cards/ItemListContainer';
import ItemDetailContainer from './components/Cards/ItemDetailContainer.jsx'
import AppLayout from './layout/AppLayout.jsx';
import Error404 from './pages/Home/Error404.jsx';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<AppLayout nav={false} footer={false}/>}>
              <Route path='/' element={<Home label='Indumentaria de prueba label'/>}/> 
            </Route>  
            <Route path='/' element={<AppLayout nav={true} footer={true}/>}>
              <Route path='/ItemList' element={<ItemListContainer label='Indumentaria de prueba label'/>}/> 
              <Route path='/:category/:prod' element={<ItemListContainer label='Indumentaria de prueba label'/>}/> 
              <Route path='/item/:id' element={<ItemDetailContainer/>}/> 
              <Route path='*' element={<Error404/>}/> 
            </Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App
