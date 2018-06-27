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
    </Container>
  </div>
);

export default About;
