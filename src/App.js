import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"¡E-commerce para Coder!"}/>
      <Footer />
    </div>
  );
}

export default App;
