import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8082/api/v3/login", {
                email,
                password
            });

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
        <div className="register-container ">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}  <br/>
            <p><Link to="/forgot-password">Forgot Password?</Link></p><br/>
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
    );
};

export default Login;
