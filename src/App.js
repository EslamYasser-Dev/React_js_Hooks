import './App.css';
import Products from './components/Products';
import ProductsViaApi from './components/ProductsViaApi';
import SignUp  from './components/SignUp'

function App() {
  return (
    <div className="App">
      
      <Products/>
      <SignUp/>
      <ProductsViaApi/>
      
    </div>
  );
}

export default App;
