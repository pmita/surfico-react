import React from 'react';
//Importing everything react router related
import {BrowserRouter as Router, Switch, Route }from 'react-router-dom';
//importing components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/locations" component={Locations} />
              <Route path="/about" component={AboutUs} />
              <Route path="/contact" component={Contact} />
            </Switch>

        </div>
    </Router>

  );
}

export default App;
