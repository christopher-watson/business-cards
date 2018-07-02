import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
  <div>
    <Hero backgroundImage="https://cdn.makeawebsitehub.com/wp-content/uploads/2016/04/social_media.jpg">
      <h1>Social Swap</h1>
      <h2>The One Stop Shop for Networking!</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Social Swap!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
This can be the landing page with a short description of what the app does. When we decide on a final format the nav bar will only have the sign up and login buttons not the links to the other pages.
          </p>
        </Col>
      </Row>
      <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
      </div>
    </div>
  </nav>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form className="login">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email-input" placeholder="Email" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password-input" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-default">Login</button>
        </form>
        <br />
        <p>Or sign up <a href="/">here</a></p>
      </div>
    </div>
  </div>
    </Container>
  </div>
);

export default About;
