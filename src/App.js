import './App.css';
import MeanSection from './Components/js/MeanSection';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from "./Components/js/Products"
import Orders from "./Components/js/Orders"
import Category from "./Components/js/Category"
import Site from "./Components/js/Site"
import Login from './Components/js/Login';
import NoConnectPage from "./Components/js/NoConnectPage"
import NotFoundPage from "./Components/js/NotFoundPage"

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<MeanSection/>}>
            <Route path="/orders" element={<Orders/>}></Route>
            <Route path="/types" element={<Category/>}></Route>
            <Route path="/site" element={<Site/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/noconnect" element={<NoConnectPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
