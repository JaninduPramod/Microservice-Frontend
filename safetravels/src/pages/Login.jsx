import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; 

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8082/api/v3/login", { email, password });

            console.log("Response:", response.data);
            
            if (response.data === "Login successful") {
                setMessage("Login successful!");
                localStorage.setItem("userEmail", email);
                navigate("/home");  
            } else {
                setMessage("Invalid email or password.");
            }
        } catch (error) {
            console.error("Login error:", error);
            setMessage("An error occurred during login.");
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="login-input"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="login-input"
                    />
                    <button type="submit" className="login-button">Login</button>
                </form>
                {message && <p className="login-message">{message}</p>}  
                <p><Link to="/forgot-password" className="login-link">Forgot Password?</Link></p>
                <p>Don't have an account? <Link to="/register" className="login-link">Register here</Link></p>
            </div>
        </div>
    );
};

export default Login;
