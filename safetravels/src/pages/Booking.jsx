import React, { useState } from 'react';
import "./Booking.css";


export default function BookingPage() {
    const [hotel, setHotel] = useState('');
    const [packageType, setPackageType] = useState('');
    const [noOfDays, setNoOfDays] = useState('');
    const [noOfPackages, setNoOfPackages] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = {
            hotel_id: hotel === 'hotel1' ? 1 : hotel === 'hotel2' ? 2 : 3, 
            package_id: packageType === 'family' ? 1 : packageType === 'single' ? 2 : 3,
            no_of_days: noOfDays,
            no_of_packages: noOfPackages,
            booking_status: 'pending',
        };
    
        fetch('http://localhost:8081/api/v4/newbooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response=>response.text())
        .then(message=>alert(message))
        .catch(error => alert('Error: ' + error.message));
        
    };

  return (
    <div className="booking-container">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="hotel">Select Hotel:</label>
                <select 
                    id="hotel" 
                    value={hotel}
                    onChange={(e) => setHotel(e.target.value)}
                >
                    <option value="hotel1">Hotel One</option>
                    <option value="hotel2">Hotel Two</option>
                    <option value="hotel3">Hotel Three</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="package">Select Package Type:</label>
                <select 
                    id="package" 
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                >
                    <option value="family">Family Package</option>
                    <option value="couple">Couple Package</option>
                    <option value="single">Individual Package</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="noOfPackages">No of Packages:</label>
                <input 
                    type="number" 
                    id="noOfPackages" 
                    className="input-number"
                    value={noOfPackages}
                    onChange={(e) => setNoOfPackages(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="days">No of Days:</label>
                <input 
                    type="number" 
                    id="days" 
                    className="input-number"
                    value={noOfDays}
                    onChange={(e) => setNoOfDays(e.target.value)}
                />
            </div>

            <div className="center-align">
                <button type="submit" className="submit-btn">
                    Book
                </button>
            </div>
        </form>
    </div>
  );
}
