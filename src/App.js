import './App.css';
import MeanSection from './Components/js/MeanSection';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from "./Components/js/Products"
import Orders from "./Components/js/Orders"
import Types from "./Components/js/Types"
import Site from "./Components/js/Site"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MeanSection/>}>
            <Route index path="products" element={<Products/>}></Route>
            <Route index path="orders" element={<Orders/>}></Route>
            <Route index path="types" element={<Types/>}></Route>
            <Route index path="site" element={<Site/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
