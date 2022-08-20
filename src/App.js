import './App.css';
import MeanSection from './Components/js/MeanSection';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from "./Components/js/Products"
import Orders from "./Components/js/Orders"
import Category from "./Components/js/Category"
import Site from "./Components/js/Site"
import Login from './Components/js/Login';
import ErrorPage from "./Components/js/ErrorPage"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MeanSection/>}>
            <Route path="/orders" element={<Orders/>}></Route>
            <Route path="/types" element={<Category/>}></Route>
            <Route path="/site" element={<Site/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/error" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
