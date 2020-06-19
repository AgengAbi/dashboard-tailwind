import React from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

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
