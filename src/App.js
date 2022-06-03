import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"¡Comienzo del E-commerce para Coder!"}/>
    </div>
  );
}

export default App;
