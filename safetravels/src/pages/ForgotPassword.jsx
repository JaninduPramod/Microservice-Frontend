import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./ForgotPassword.css"; 

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(""); 

        try {
            const response = await axios.post("http://localhost:8082/api/v3/forgot-password", { email });
            setMessage({ text: response.data, type: "success" });
            navigate("/otp"); 
        } catch (error) {
            setMessage({ text: "Invalid user !!!", type: "error" });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="forgot-password-page">
            <div className="forgot-password-container">
                <h2>Forgot Password</h2>
                <p className="forgot-password-info">Enter your email to receive a password reset link.</p>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        className="forgot-password-input"
                        autoFocus
                    />
                    <button 
                        type="submit" 
                        className="forgot-password-button"
                        disabled={!email || isLoading}
                    >
                        {isLoading ? "Sending..." : "Reset Password"}
                    </button>
                </form>
                {message && (
                    <p className={`forgot-password-message ${message.type}`}>
                        {message.text}
                    </p>
                )}
                <p>
                    <Link to="/login" className="forgot-password-link">Back to Login</Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
