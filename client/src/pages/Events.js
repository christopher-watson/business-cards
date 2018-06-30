import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Events = () => (
    <div>
    <Hero backgroundImage="https://cdn.makeawebsitehub.com/wp-content/uploads/2016/04/social_media.jpg">
      <h1>Social Swap</h1>
      <h2>The One Stop Shop for Networking!</h2>
    </Hero>

    <Container style={{ marginTop: 30 }}>
    <div className="row mt-5 mx-auto text-center content-row">
    <div className="col-md-6 col-sm-6">
      <h3 className="mb-4 page-text">Create an Event</h3>
      <button className="btn btn-warning mr-2" id="newEventButton" type="button">New Event</button>
      <span id="newEventCode"></span>
    </div>
    <div className="col-md-4 col-sm-4">
      <h3 className="mb-4 page-text">Join an Event</h3>
      <div className="input-group">
        <input type="text" className="form-control" id="eventInput" placeholder="Event Code" />
        <div className="input-group-append">
          <button className="btn btn-outline-primary" id="joinEventButton" type="button">Submit</button>
        </div>
      </div>
    </div>
  </div>

    </Container>
  </div>
);

 export default Events;