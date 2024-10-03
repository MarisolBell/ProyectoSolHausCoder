import HeroBanner from './components/HeroBanner/HeroBanner';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import PromoBanner from './components/PromoBanner/PromoBanner';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  
  return (
    <div>
      <HeroBanner/>
      <NavBar/>
      <PromoBanner/>
      <ItemListContainer greeting={"Próximamente... Tienda SolHaus"}/>
    </div>
  )
}

export default App
