import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import "./OtpVerification.css";

const OtpVerification = () => {
    const [otp, setOtp] = useState(Array(6).fill(""));
    const inputRefs = useRef([]);
    const navigate = useNavigate();

    const handleChange = (index, e) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value.slice(-1); // Only take the last entered character
        setOtp(newOtp);
        
        if (e.target.value && index < 5) inputRefs.current[index + 1].focus();
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const enteredOtp = otp.join(""); // Convert array to a string

        if (enteredOtp.length === 6) {
            try {
                const response = await axios.get("http://localhost:8082/api/v3/verify-otp", {
                    params: { otp: enteredOtp } // Send OTP as a query parameter
                });

                alert(`OTP Verified: ${response.data}`);
                navigate("/reset-password");
            } catch (error) {
                alert("Invalid OTP. Please try again.");
            }
        } else {
            alert("Please enter all 6 characters.");
        }
    };

    return (
        <div className="otp-page">
            <div className="otp-container">
                <h2>Enter OTP</h2>
                <p className="otp-info">Enter the 6-character OTP sent to your email.</p>
                <form onSubmit={handleSubmit}>
                    <div className="otp-input-group">
                        {otp.map((char, index) => (
                            <input
                                key={index}
                                type="text"
                                value={char}
                                maxLength="1"
                                onChange={(e) => handleChange(index, e)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                ref={(el) => (inputRefs.current[index] = el)}
                                className="otp-input"
                            />
                        ))}
                    </div>
                    <button type="submit" className="otp-button">Verify OTP</button>
                </form>
            </div>
        </div>
    );
};

export default OtpVerification;
