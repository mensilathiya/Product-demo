import React, { Children } from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Products from './features/Products/Products';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProductsDetails from './features/Products/ProductsDetails';
import Login from './features/Products/Login';
import Dashboard from './features/Products/Dashboard';
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token') ?? ''
  return isAuthenticated ? children : <Navigate to={'/login'} />
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        } />
        <Route path='/products/:id' element={<ProductsDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user/deshboard' element={<Dashboard />} />

        <Route path='*' element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
