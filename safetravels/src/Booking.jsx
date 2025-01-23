import React, { useState } from 'react';

export default function BookingPage() {

    const [hotel, setHotel] = useState('');
    const [packageType, setPackageType] = useState('');
    const [noOfDays, setNoOfDays] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


        const formData = {
            hotel_id: hotel === 'hotel1' ? 1 : hotel === 'hotel2' ? 2 : 3, 
            package_id: packageType ==='family' ? 1 :packageType === 'couple' ?2:3,
            no_of_days: noOfDays,
            booking_status: 'pending',
        };

        fetch('http://localhost:8081/api/v4/newbooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => console.log('Booking successful:', data))
        .catch(error => console.error('Error:', error));
    };

  return (
    <div style={{ maxWidth: '250px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="hotel" style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Select Hotel:</label>
                <select 
                    id="hotel" 
                    style={{ width: '80%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
                    value={hotel}
                    onChange={(e) => setHotel(e.target.value)}
                >
                    <option value="hotel1">Southern</option>
                    <option value="hotel2">Western</option>
                    <option value="hotel3">Eastern</option>
                </select>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="package" style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Select Package Type:</label>
                <select 
                    id="package" 
                    style={{ width: '80%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                >
                    <option value="family">Family Package</option>
                    <option value="couple">Couple Package</option>
                    <option value="single">Individual Package</option>
                </select>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="days" style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>No of Days:</label>
                <input 
                    type="number" 
                    id="days" 
                    style={{ width: '40%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px' }} 
                    value={noOfDays}
                    onChange={(e) => setNoOfDays(e.target.value)}
                />
            </div>

            <div style={{ textAlign: 'center' }}>
                <button type="submit" style={{
                    padding: '10px 20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                }}>
                    Book
                </button>
            </div>
        </form>
    </div>
  );
}
