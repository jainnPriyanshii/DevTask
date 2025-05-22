import react from 'react'

function Profile(){
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
            <div className="max-w-sm mx-auto mt-10 bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-gray-800 text-lg font-semibold mb-4">Account Settings</h2>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src="devtask\src\assets\react.svg" 
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M4 13V16H7L16 7L13 4L4 13Z" />
            </svg>
          </div>
        </div>
        <div>
          <h3 className="text-gray-900 font-semibold text-sm">Marry Doe</h3>
          <p className="text-gray-500 text-sm">Marry@Gmail.Com</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm mt-4">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
        Sed Diam
      </p>
    </div>
          </div>
        </div>
      );
    }


export default Profile