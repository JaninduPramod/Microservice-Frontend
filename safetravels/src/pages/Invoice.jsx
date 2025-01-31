import React, { useEffect, useState } from "react";
import "./Invoice.css";

function InvoicePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [pendingBookings, setPendingBookings] = useState([]);
  const [confirmedBookings, setConfirmedBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8083/api/v5/booking/3")
      .then((response) => response.json())
      .then((data) => {
        const bookingsArray = Array.isArray(data) ? data : [data];

        // Filter pending and confirmed bookings
        setPendingBookings(bookingsArray.filter((booking) => booking.booking_status === "pending"));
        setConfirmedBookings(bookingsArray.filter((booking) => booking.booking_status === "confirmed"));

        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleRowClick = (booking) => {
    setSelectedBooking({ ...booking });
  };

  const handleChange = (e) => {
    setSelectedBooking((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = () => {
    if (!selectedBooking) return;

    const { book_id, ...updatedData } = selectedBooking;
    
    fetch(`http://localhost:8081/api/v4/updatebooking/${book_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update booking");
        }
        return response.json();
      })
      .then(() => {
        setPendingBookings((prev) =>
          prev.map((booking) =>
            booking.book_id === book_id ? { ...booking, ...updatedData } : booking
          )
        );
        alert("Booking updated successfully");
        setSelectedBooking(null);
      })
      .catch((error) => {
        console.error("Error updating booking:", error);
        alert("Failed to update booking");
      });
  };

  const handleDelete = (bookingId) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      fetch(`http://localhost:8083/api/v5/bookingstatus/${bookingId}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete booking");
          }
          setPendingBookings((prev) => prev.filter((booking) => booking.book_id !== bookingId));
        })
        .catch((error) => {
          console.error("Error deleting booking:", error);
          alert("Failed to delete booking");
        });
    }
  };

  const  handlePay = (bookingId) => {
    if (window.confirm("Are you sure you want to pay this Bill?")) {
      fetch(`http://localhost:8081/api/v4/updatebooking2/${bookingId}`, {
        method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ booking_status: "confirmed" }),
      })
      .then((response) => response.json())
      .then(() => {
        setPendingBookings((prev) => prev.filter((booking) => booking.book_id !== bookingId));
        setConfirmedBookings((prev) => [...prev, { ...pendingBookings.find((b) => b.book_id === bookingId), booking_status: "confirmed" }]);
        alert("Payment successful! Booking confirmed.");
      })
      .catch((error) => {
        console.error("Error updating booking status:", error);
        alert("Payment failed. Please try again.");
      });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  const grandTotal = [...pendingBookings, ...confirmedBookings].reduce((sum, booking) => sum + booking.total_bill, 0);

  return (
    <div className="invoice-container">
      <header className="invoice-header">
        <h1>Invoice</h1>
      </header>

      <div className="invoice-content">
        {/* PENDING BOOKINGS TABLE */}
        <h2>Pending Bookings</h2>
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Hotel ID</th>
              <th>Package ID</th>
              <th>No. of Days</th>
              <th>No. of Packages</th>
              <th>Total Bill</th>
              <th>Action</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {pendingBookings.map((booking) => (
              <tr key={booking.book_id} onClick={() => handleRowClick(booking)}>
                <td>{booking.book_id}</td>
                <td>{booking.hotel_id}</td>
                <td>{booking.package_id}</td>
                <td>{booking.no_of_days}</td>
                <td>{booking.no_of_packages}</td>
                <td>${booking.total_bill}</td>
                <td>
                  <button onClick={() => handleDelete(booking.book_id)}>Delete</button>
                </td>
                <td>
                  <button  className="button2" onClick={() =>  handlePay(booking.book_id)}>Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* CONFIRMED BOOKINGS TABLE */}
        <h2>Confirmed Bookings</h2>
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Hotel ID</th>
              <th>Package ID</th>
              <th>No. of Days</th>
              <th>No. of Packages</th>
              <th>Total Bill</th>
            </tr>
          </thead>
          <tbody>
            {confirmedBookings.map((booking) => (
              <tr key={booking.book_id}>
                <td>{booking.book_id}</td>
                <td>{booking.hotel_id}</td>
                <td>{booking.package_id}</td>
                <td>{booking.no_of_days}</td>
                <td>{booking.no_of_packages}</td>
                <td>${booking.total_bill}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* GRAND TOTAL */}
        <div className="invoice-total">
          <h3>Grand Total: ${grandTotal}.00</h3>
        </div>

        {/* UPDATE FORM */}
        {selectedBooking && (
          <div className="update-form">
            <h2>Update Booking</h2>
            <label htmlFor="hotel_id">HOTEL Number</label>
            <input
              type="text"
              name="hotel_id"
              value={selectedBooking.hotel_id}
              onChange={handleChange}
            />

            <label>Booking ID: 00{selectedBooking?.book_id || ""}</label>

            <label htmlFor="package_id">Package ID</label>
            <input
              type="text"
              name="package_id"
              value={selectedBooking.package_id}
              onChange={handleChange}
            />

            <label htmlFor="no_of_days">Days</label>
            <input
              type="number"
              name="no_of_days"
              value={selectedBooking.no_of_days}
              onChange={handleChange}
            />

            <label htmlFor="no_of_packages">Package</label>
            <input
              type="number"
              name="no_of_packages"
              value={selectedBooking.no_of_packages}
              onChange={handleChange}
            />
<div className="invoice-total">
            <label htmlFor="total_bill ">Total Bill : $ {selectedBooking.total_bill|| ""}.00</label></div>
            {/* <input
              type="number"
              name="total_bill"
              value={selectedBooking.total_bill}
              onChange={handleChange}
            /> */}

            <button onClick={handleUpdate}>Update</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default InvoicePage;
