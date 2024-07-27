import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import {routes } from './Constants/Constants';
import Nav from './Compoments/Nav';
import Register from './Compoments/Register'
import Login from './Compoments/Login'
import Home from './Compoments/Home';
import Aboutus from './Compoments/Aboutus';
import './index.css';
const appStyle = {
  backgroundColor: '#dc2626',
  height:"900px"
};
function App() {
  return (
    
     <div style={}>
   <div>
   
      <Router className=' '>
      <Nav/>
      <Routes>
      <Route path="/Aboutus" element={<Aboutus/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
    </div>  
    </div>  

  
    
    
  );
}

export default App;
