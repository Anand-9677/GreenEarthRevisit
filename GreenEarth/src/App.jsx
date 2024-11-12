import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Plants from './components/Plants';
import Supplies from './components/Supplies';
import Blog from './components/Blog';
import Login from './components/Login';
import Cart from './components/Cart';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-r from-[#636363] to-[#A2AB58]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/plants' element={<Plants />} />
          <Route path='/supplies' element={<Supplies />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
