import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar.jsx';
import BookingPage from './pages/Booking.jsx';
import FrontPage from './pages/FrontPage.jsx';
import RegisterPage from './pages/Register.jsx';
import InvoicePage from './pages/invoice.jsx';
// import Hotel from './pages/Hotel.jsx';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      
        <Route path="/" element={<FrontPage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/booking" element={<BookingPage/>} />
        <Route path="/invoice" element={<InvoicePage/>} />


        {/* <Route path="/admin" element={<Hotel/>} /> */}
        
      </Routes>
    </Router>
    
  );
}

export default App;
