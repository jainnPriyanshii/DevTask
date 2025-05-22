import react from 'react'
import { useNavigate } from 'react-router-dom';

function Signin(){
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
              <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
             <h2 className="text-2xl font-bold text-gray-900">Signin to your <br /> PopX account</h2>
      <p className="text-gray-500 mt-2 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-purple-600">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-600">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 focus:ring-purple-500 bg-purple-600 text-white rounded-lg font-semibold "
          onClick={()=>navigate('/profile')}
        >
          Login
        </button>
      </form>
      </div>
          </div>
        </div>
      );
    }

export default  Signin