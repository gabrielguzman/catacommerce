import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import { useState } from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer';
import Navbar from "./components/NavBar";
import NotFound from "./components/NotFound";


function App() {
  const [cantidad, setCantidad] = useState(0)
  const sumarCarrito = (cantidadCarrito) => {setCantidad(cantidad+cantidadCarrito)};

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar cantidad = {cantidad}/>
      <div className="contenido">
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:id" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer setCantidad={sumarCarrito}/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
