import ShowProducts from './components/ShowProducts';
import AddProduct from './components/AddProduct';
import NavBarMenu from './components/NavBarMenu';
import ProductDetail from './components/ProductDetail';
import UpdateProduct from './components/UpdateProduct';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarMenu />
        <Routes>
          <Route exact path='/' element={<ShowProducts />} />
          <Route exact path='/addproduct' element={<AddProduct />} />
          <Route exact path='/:id/' element={<ProductDetail />} />
          <Route exact path='/:id/update' element={<UpdateProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
