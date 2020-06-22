import React from 'react';
import './index.css';
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function App() {
  return (
    <Router>
      <div className="App h-screen w-screen relative overflow-hidden">
        <Navbar />
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
