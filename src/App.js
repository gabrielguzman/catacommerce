import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import { initializeApp } from "firebase/app";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from './components/Footer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer';
import Navbar from "./components/NavBar";
import NotFound from "./components/NotFound";
import CartContext from "./context/CartContext";

function App() {
  
  const firebaseConfig = {
    apiKey: "AIzaSyBtrXh7q8Nt1sOaJ4DUlropwjjj6lB8pew",
    authDomain: "codercatacommerce.firebaseapp.com",
    projectId: "codercatacommerce",
    storageBucket: "codercatacommerce.appspot.com",
    messagingSenderId: "380195476064",
    appId: "1:380195476064:web:e417f5db54e8d764dd6905",
    measurementId: "G-SWKK345J1C"
  };

  initializeApp(firebaseConfig);

  return (
    <div className="App">
      <BrowserRouter>
      <CartContext>
      <Navbar/>
      <div className="contenido">
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:id" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      </CartContext>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;