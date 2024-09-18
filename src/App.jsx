import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes,Switch, BrowserRouter } from 'react-router-dom';
import {routes } from './Constants/Constants';
import Nav from './Compoments/Nav';
import Register from './Compoments/Register'
import Login from './Compoments/Login'
import Home from './Compoments/Home';
import Aboutus from './Compoments/Aboutus';
import './index.css';
import Header from './Sections/header';
import Hero from './Sections/Hero';


const appStyle = {
  background: 'url(src/Images/a.svg',
  height:"900px"
};
function App() {
  return (
   
    
     <div className=''>
     
      
  
 
    < BrowserRouter >
     
      <Nav/>
    <Routes>
      <Route path="/Aboutus" element={<Aboutus/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Home />} />
        </Routes>
  

    </BrowserRouter>
    <section>
      <Hero/> 
    </section>
  
    </div>
 
   
    

  
    
    
  );
}

export default App;
