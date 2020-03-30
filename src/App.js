import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Jewelery from "./pages/jewelery";
import Contact from "./pages/contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Suly from "./pages/suly";

function App() {
  return (
    <Router>
      <div>
      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/jewelery" component={Jewelery} />
          <Route exact path="/suly" component={Suly} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
