import { useEffect, useState } from "react";
import axios from "axios";
import "./Hotel.css";

export default function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState("");
  const [hotelDetails, setHotelDetails] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newHotel, setNewHotel] = useState({
    address: "",
    telephone: "",
    province: "",
    available_packages: 0,
  });

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/api/v2/getDetails");
        setHotels(data);
      } catch (error) {
        console.error("Error fetching hotel IDs:", error);
      }
    };
    fetchHotels();
  }, []);

  const fetchHotelDetails = async (hotelId) => {
    if (!hotelId) return;
    try {
      const { data } = await axios.get(`http://localhost:8080/api/v2/gethotel/${hotelId}`);
      setHotelDetails(data);
    } catch (error) {
      console.error("Error fetching hotel details:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put("http://localhost:8080/api/v2/updateHotel", hotelDetails);
      alert(response.data); // Show success or error message from the backend
    } catch (error) {
      console.error("Error updating hotel details:", error);
      alert("Failed to update hotel details.");
    }
  };

  const handleAddHotel = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v2/newhotel", newHotel);
      alert("Hotel added successfully!");
      setNewHotel({
        address: "",
        telephone: "",
        province: "",
        available_packages: 0,
      });
      // Refresh the hotel list
      const { data } = await axios.get("http://localhost:8080/api/v2/getDetails");
      setHotels(data);
    } catch (error) {
      console.error("Error adding hotel:", error);
    }
  };

  const handleNewHotelChange = (e) => {
    const { name, value } = e.target;
    setNewHotel((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <label className="label">Select a Hotel:</label>
      <select
        className="select-box"
        value={selectedHotel}
        onChange={(e) => {
          setSelectedHotel(e.target.value);
          fetchHotelDetails(e.target.value);
        }}
      >
        <option value="">-- Select --</option>
        {hotels?.map(({ id }) => (
          <option key={id} value={id}>{id}</option>
        ))}
      </select>

      {hotelDetails && (
        <div className="details-container">
          <h2 className="details-title">Hotel Details</h2>

          <div className="edit-toggle">
            <input
              type="checkbox"
              id="editToggle"
              checked={isEditing}
              onChange={() => setIsEditing(!isEditing)}
            />
            <label htmlFor="editToggle">Enable Editing</label>
          </div>

          <div className="detail-item">
            <label className="detail-label">Address:</label>
            <input
              type="text"
              className="detail-input"
              value={hotelDetails.address}
              onChange={(e) => setHotelDetails({ ...hotelDetails, address: e.target.value })}
              disabled={!isEditing}
            />
          </div>

          <div className="detail-item">
            <label className="detail-label">Telephone:</label>
            <input
              type="text"
              className="detail-input"
              value={hotelDetails.telephone}
              onChange={(e) => setHotelDetails({ ...hotelDetails, telephone: e.target.value })}
              disabled={!isEditing}
            />
          </div>

          <div className="detail-item">
            <label className="detail-label">Province:</label>
            <input
              type="text"
              className="detail-input"
              value={hotelDetails.province}
              onChange={(e) => setHotelDetails({ ...hotelDetails, province: e.target.value })}
              disabled={!isEditing}
            />
          </div>

          <div className="detail-item">
            <label className="detail-label">Available Packages:</label>
            <input
              type="number"
              className="detail-input"
              value={hotelDetails.available_packages}
              onChange={(e) => setHotelDetails({ ...hotelDetails, available_packages: e.target.value })}
              disabled={!isEditing}
            />
          </div>

          {isEditing && (
            <button className="update-btn" onClick={handleUpdate}>
              Update Hotel
            </button>
          )}
        </div>
      )}

      <div className="details-container">
        <h2 className="details-title">Add New Hotel</h2>
        <form onSubmit={handleAddHotel}>
          <div className="detail-item">
            <label className="detail-label">Address:</label>
            <input
              type="text"
              className="detail-input"
              name="address"
              value={newHotel.address}
              onChange={handleNewHotelChange}
              required
            />
          </div>
          <div className="detail-item">
            <label className="detail-label">Telephone:</label>
            <input
              type="text"
              className="detail-input"
              name="telephone"
              value={newHotel.telephone}
              onChange={handleNewHotelChange}
              required
            />
          </div>
          <div className="detail-item">
            <label className="detail-label">Province:</label>
            <input
              type="text"
              className="detail-input"
              name="province"
              value={newHotel.province}
              onChange={handleNewHotelChange}
              required
            />
          </div>
          <div className="detail-item">
            <label className="detail-label">Available Packages:</label>
            <input
              type="number"
              className="detail-input"
              name="available_packages"
              value={newHotel.available_packages}
              onChange={handleNewHotelChange}
              required
            />
          </div>
          <button type="submit" className="update-btn">
            Add Hotel
          </button>
        </form>
      </div>
    </div>
  );
}