import './App.css';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';
import Login from './pages/Login/Login';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import Orders from './pages/Orders';
import Favourites from './pages/Favourites';
import Category from './pages/Category';
import Page404 from './pages/Page404';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/login" element={Login}/>
        <Route exact path="/" element={ <Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/my-account" element={MyAccount}/>
        <Route path="/orders" element={Orders}/>
        <Route path="/favourites" element={Favourites}/>
        <Route path="/category/:categoryName" element={<Category/>}/>
        <Route path="/product/:productId" element={Product}/>
      <Route path="*" element={Page404}/>
    </Routes>
  </div>
  );
}

export default App;
