import {  BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';

function App(){

  return (
 <Routes>
        <Route path="/" element={<Homepage/>}/>
        
        <Route path="/sign-in" element={<Signin/>} />
        < Route path="/sign-up" element={<Signup/>} />
         < Route path="/profile" element={<Profile/>} />
        

      </Routes>
  );
}

export default App;