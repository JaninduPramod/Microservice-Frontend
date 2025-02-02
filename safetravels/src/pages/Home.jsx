import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Home.css";


const Home = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const email = localStorage.getItem("userEmail");

        if (!email) {
            navigate("/login"); 
        } else {
            fetchUserDetails(email);
        }
    }, [navigate]);

    const fetchUserDetails = async (email) => {
        try {
            const response = await axios.get(`http://localhost:8082/api/v3/getuserbyemail/${email}`);
            setUser(response.data);
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    };

    const handleNavigate = () => {
        navigate("/booking"); 
    };

    return (
        <div className="home-container">
            <h2>Welcome to Home Page</h2>
            {user ? (
                <div>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Mobile:</strong> {user.mobile}</p>
                    <p><strong>Address:</strong> {user.address}</p>
                    <p><strong>Age:</strong> {user.age}</p>
                </div>
            ) : (
                <p>Loading user details...</p>
            )}

            <button className="navigate-button" onClick={handleNavigate}>Go to Booking</button>
        </div>
    );
};

export default Home;
