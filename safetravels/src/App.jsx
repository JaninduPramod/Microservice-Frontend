import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar.jsx';
import BookingPage from './pages/Booking.jsx';
import FrontPage from './pages/FrontPage.jsx';
import RegisterPage from './pages/Register.jsx';
import InvoicePage from './pages/invoice.jsx';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage/>} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/invoice" element={<InvoicePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
