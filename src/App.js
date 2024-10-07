import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Nav />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/booking" element={<BookingPage />}/>
          </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
