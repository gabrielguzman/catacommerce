import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Cart from "./components/Cart";
import Footer from './components/Footer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer';
import Navbar from "./components/NavBar";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className="contenido">
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:id" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;