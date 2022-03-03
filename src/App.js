import logo from './logo.svg';
import './App.css';
import  { Link, useNavigate } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import AddEvent from './pages/AddEvents';
import MyEvents from './pages/MyEvents';
import Home from './pages/Home'
function App() {
 
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<AddEvent />} />
        <Route path="/myEvents" element={<MyEvents />} />
      </Routes>

    </div>
  );
}

export default App;
