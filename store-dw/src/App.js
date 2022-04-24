import Products from "./components/Products";
import '../src/assets/globalStyles.css';
import Header from "./components/Header";
import { useState } from "react";


function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Header cart={cart}/>
      <Products setCart={setCart} cart={cart}/>
    </div>
  );
}

export default App;
