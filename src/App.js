// App.js
import React from 'react';
import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Services from './pages/Services';
import Tombstones from './pages/Services/Tombstones';
import Countertops from './pages/Services/Countertops';
import Tables from './pages/Services/Tables';
import Fireplaces from './pages/Services/Fireplaces';
import Products from './pages/Products';
import './App.css';


function App() {
  return (
        <HashRouter basename="/Quality-granite">
      
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/tombstones" element={<Tombstones />} />
          <Route path="/services/countertops" element={<Countertops />} />
          <Route path="/services/tables" element={<Tables />} />
          <Route path="/services/fireplaces" element={<Fireplaces />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
      <Footer />
     </HashRouter>
  );
}

export default App;