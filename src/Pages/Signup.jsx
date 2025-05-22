import react from 'react'
import { useNavigate } from 'react-router-dom';

function Signup(){
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
        height: "600px",
        backgroundColor: "#ffffff",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)", 
        borderRadius: "20px",
      };
    
      return (
        <div style={containerStyle}>
          <div style={mobileDivStyle}>
             <form  className="w-full max-w-md bg-white p-4 rounded-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Create your PopX account</h2>

        {/* Full Name */}
        <div className="mb-2">
          <label className="text-sm font-medium text-purple-600">Full Name<span className="text-red-500">*</span></label>
          <input
            type="text"
            name="fullName"
            // value={formData.fullName}
            // onChange={handleChange}
            className="mt-0.8 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Marry Doe"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="text-sm font-medium text-purple-600">Phone number<span className="text-red-500">*</span></label>
          <input
            type="tel"
            name="phone"
            // value={formData.phone}
            // onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Marry Doe"
            required
          />
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label className="text-sm font-medium text-purple-600">Email address<span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Marry Doe"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-sm font-medium text-purple-600">Password<span className="text-red-500">*</span></label>
          <input
            type="password"
            name="password"
            // value={formData.password}
            // onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Marry Doe"
            required
          />
        </div>

        
        <div className="mb-4">
          <label className="text-sm font-medium text-purple-600">Company name</label>
          <input
            type="text"
            name="companyName"
            // value={formData.companyName}
            // onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Marry Doe"
          />
        </div>

        {/* Radio Buttons */}
        <div className="mb-6">
          <label className="text-sm font-medium text-purple-600 block mb-2">Are you an Agency?<span className="text-red-500">*</span></label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="isAgency"
                value="Yes"
                // onChange={handleChange}
                className="text-purple-600 focus:ring-purple-500"
                required
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="isAgency"
                value="No"
                // onChange={handleChange}
                className="text-purple-600 focus:ring-purple-500"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        <button
          type="submit" onClick={()=> navigate("/profile")}
          className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition"
        >
          Create Account
        </button>
      </form>
          </div>
        </div>
      );
    }

export default Signup