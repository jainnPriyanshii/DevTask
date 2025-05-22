import React from "react";
import { useNavigate } from "react-router-dom";
export default function Homepage() {

     const navigate = useNavigate();
 
  const containerStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0", 
  };

  const mobileDivStyle = {
    width: "375px",
    height: "550px",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)", 
    borderRadius: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={mobileDivStyle}>
      <div className="w-full max-w-sm text-center pb-10 mt-50">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Welcome to PopX</h2>
        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>
        <button
          className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold text-sm mb-3 hover:bg-purple-700 transition"
          onClick={() => navigate('/sign-up')}
        >
          Create Account
        </button>
        <button
          className="w-full bg-purple-100 text-purple-700 py-3 rounded-md font-semibold text-sm hover:bg-purple-200 transition"
          onClick={() => navigate('/sign-in')}
        >
          Already Registered? Login
        </button>
      </div>
        
      </div>
    </div>
  );
}
