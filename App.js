
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; 
import Register from './register';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
