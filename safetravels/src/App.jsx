import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar.jsx';
import BookingPage from './pages/Booking.jsx';
import FrontPage from './pages/FrontPage.jsx';
import RegisterPage from './pages/Register.jsx';
import InvoicePage from './pages/Invoice.jsx';
import Login from './pages/Login.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import OtpVerification from './pages/OtpVerification.jsx';
import Notyfy from './pages/Notyfy.jsx';
// import Home from './pages/Home.jsx';
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
        <Route path='/login' element={<Login/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/otp" element={<OtpVerification/>}/>
        <Route path='/Notify' element={<Notyfy/>} />




        {/* <Route path='/home' element={<Home/>} /> */}
        {/* <Route path="/admin" element={<Hotel/>} /> */}
        
      </Routes>
    </Router>
    
  );
}

export default App;
