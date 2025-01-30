import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Booking.css";

export default function BookingPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedImage = queryParams.get('image') || "https://via.placeholder.com/150"; // Default image
  const hotelNumber = queryParams.get('hotel') || "1"; // Get the hotel number from the URL query

  const [hotel, setHotel] = useState(hotelNumber);
  const [packageType, setPackageType] = useState('');
  const [noOfDays, setNoOfDays] = useState('');
  const [noOfPackages, setNoOfPackages] = useState('');

  useEffect(() => {
    setHotel(hotelNumber); // Update hotel based on URL parameter
  }, [hotelNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      hotel_id: hotel === '1' ? 1 : hotel === '2' ? 2 : 3,
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
      .then(response => response.text())
      .then(message => alert(message))
      .catch(error => alert('Error: ' + error.message));
  };

  return (
    <div className="container1 mt-4">
      <div className="m2" >
        <div className="">
          <div className="">
          <h5 className="card-title1">Book Your Stay</h5>
          <img 
      src={selectedImage} 
      className="image11" 
      alt="Selected" 
    />
          </div>
          <div className="">
            <div className="image22">
              <h5></h5>
              <p className="card-text1">
                Choose your preferred hotel and package, then submit your booking request.
              </p>

              {/* Booking Form Inside the Card */}
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label htmlFor="hotel1" className="form-label1">Select Hotel:</label>
                  <select 
                    id="hotel" 
                    className="form-control"
                    value={hotel}
                    onChange={(e) => setHotel(e.target.value)}
                  >
                    <option value="1"> 1</option>
                    <option value="2"> 2</option>
                    <option value="3"> 3</option>
                    <option value="4"> 4</option>
                  </select>
                </div>

                <div className="mb-2">
                  <label htmlFor="package" className="form-label">Select Package Type:</label>
                  <select 
                    id="package" 
                    className="form-control"
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                  >
                    <option value="">-- Select Package --</option>
                    <option value="family">Family Package</option>
                    <option value="couple">Couple Package</option>
                    <option value="single">Individual Package</option>
                  </select>
                </div>

                <div className="mb-2">
                  <label htmlFor="noOfPackages" className="form-label">No of Packages:</label>
                  <input 
                    type="number" 
                    id="noOfPackages" 
                    className="form-control"
                    value={noOfPackages}
                    onChange={(e) => setNoOfPackages(e.target.value)}
                    min="1"
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="days" className="form-label">No of Days:</label>
                  <input 
                    type="number" 
                    id="days" 
                    className="form-control"
                    value={noOfDays}
                    onChange={(e) => setNoOfDays(e.target.value)}
                    min="1"
                  />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Book Now
                  </button>
                </div>
              </form>

              <p className="card-text mt-2">
                <small className="text-body-secondary">Last updated a few moments ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
