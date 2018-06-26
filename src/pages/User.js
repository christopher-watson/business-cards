import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const User = () => (
    <div>
    <Hero backgroundImage="https://cdn.makeawebsitehub.com/wp-content/uploads/2016/04/social_media.jpg">
      <h1>Social Swap</h1>
      <h2>The One Stop Shop for Networking!</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>User info!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
         

      <form>
     
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label for="nameInput">Name</label>
          <input type="text" class="form-control" id="nameInput" placeholder="Name" required />
          <div className="invalid-feedback">
            Please provide your name
          </div>
        </div>
    
        <div className="col-md-6 mb-3">
          <label for="photoInput">Upload a Photo</label>
          <div className="custom-file">
            <input type="file" class="custom-file-input" id="userPhoto" />
            <label className="custom-file-label" for="userPhoto">Choose file</label>
          </div>
        </div>
      </div>
   
      <div className="form-row">
        <div className="col-md-6 mb-3">
          <label for="emailInput">Email</label>
          <input type="text" class="form-control" id="emailInput" placeholder="Email" required />
          <div className="invalid-feedback">
            Please provide your email address
          </div>
        </div>
    
        <div className="col-md-4 mb-3">
          <label for="phoneInput">Phone Number</label>
          <input type="text" className="form-control" id="phoneInput" placeholder="555-222-1337" />
        </div>
      </div>
  
      <div className="form-row">
        <div className="col-md-3 mb-3">
          <label for="twitterInput">Twitter</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend">@</span>
            </div>
            <input type="text" className="form-control" id="twitterInput" placeholder="jimbosmith" aria-describedby="inputGroupPrepend" />
          </div>
        </div>
    
        <div className="col-md-3 mb-3">
          <label for="facebookInput">Facebook</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend">facebook.com/</span>
            </div>
            <input type="text" className="form-control" id="facebookInput" placeholder="janesmith" aria-describedby="inputGroupPrepend" />
          </div>
        </div>
      
        <div className="col-md-3 mb-3">
          <label for="linkedInput">Linked In</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend">linkedin.com/in/</span>
            </div>
            <input type="text" className="form-control" id="linkedInput" placeholder="willsmith" aria-describedby="inputGroupPrepend" />
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <label for="githubInput">Github</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend">github.com/</span>
            </div>
            <input type="text" className="form-control" id="githubInput" placeholder="cooljames" aria-describedby="inputGroupPrepend" />
          </div>
        </div>
      </div>
      <button className="btn btn-primary mt-2" id="contactInfoSubmit" type="submit">Submit</button>
    </form>



        
        </Col>
      </Row>
    </Container>
  </div>
);

 export default User;