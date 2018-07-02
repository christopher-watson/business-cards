import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import User from "./pages/User";
import Events from "./pages/Events";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/user" component={User} />
        <Route exact path="/events" component={Events} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
