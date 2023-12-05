// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import AuthForm from './components/AuthForm';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Use Route to wrap the PrivateRoute logic */}
        <Route
          path="/"
          element={<PrivateRoute element={<Home />} />}
        />
        <Route path="/cart" element={<PrivateRoute element={<Cart />}/>} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
