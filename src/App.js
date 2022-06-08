import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Footer from './components/Footer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer';
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemDetailContainer />
      <ItemListContainer greeting={"¡E-commerce para Coder!"}/>
      <Footer />
    </div>
  );
}

export default App;
