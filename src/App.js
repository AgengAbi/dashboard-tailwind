import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Home.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact components={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
