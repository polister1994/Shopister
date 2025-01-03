import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import './index.css'
import App from './App.jsx'
import CartProvider from './components/Context/cartProvider.jsx'

//* Configuracion de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB0YkNsi04K_VoTZAfsB39xUQxGllXvzGo",
  authDomain: "shopister-59f40.firebaseapp.com",
  projectId: "shopister-59f40",
  storageBucket: "shopister-59f40.firebasestorage.app",
  messagingSenderId: "134252806176",
  appId: "1:134252806176:web:52a33ed979fbc3786bfc45",
  measurementId: "G-VJ16D50N9G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App/>
    </CartProvider>
  </StrictMode>
)


