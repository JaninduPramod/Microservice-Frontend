import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Registrer.css";

const Register = () => {
    const [user, setUser] = useState({
        address: "",
        age: "",
        email: "",
        mobile: "",
        password: "",
        username: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8082/api/v3/newuser", user);
            alert("Registration Successful! Redirecting to Login...");
            window.location.href = "/login";
        } catch (error) {
            console.error("Error registering user", error);
            alert("Registration Failed");
        }
    };

    return (
        <div className="register-page">
            <div className="register-container">
                <h2>Create Your Account</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={user.username}
                        onChange={handleChange}
                        required
                        className="register-input"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                        required
                        className="register-input"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={handleChange}
                        required
                        className="register-input"
                    />
                    <input
                        type="text"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={user.mobile}
                        onChange={handleChange}
                        required
                        className="register-input"
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={user.address}
                        onChange={handleChange}
                        required
                        className="register-input"
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={user.age}
                        onChange={handleChange}
                        required
                        className="register-input"
                    />
                    <button type="submit" className="register-button">
                        Sign Up
                    </button>
                </form>
                <p>Already have an account? <Link to="/login" className="register-link">Login here</Link></p>
            </div>
        </div>
    );
};

export default Register;
