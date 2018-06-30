const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Name: { 
    type: String, 
    default: 'No Name'
  },
  Password:{
    type: String,
    default: 'password'
  },
  Email: { 
    type: String, 
    default: 'No Email'
  },
  Code: {
    type: String,
  },
  Photo: { 
    type: String, 
    default: 'http://res.cloudinary.com/yowats0n/image/upload/v1527687540/default_user.png'
  },
  Phone: { 
    type: String, 
  },
  Twitter: { 
    type: String, 
  },
  Fb: { 
    type: String, 
  },
  Link: { 
    type: String, 
  },
  Git: { 
    type: String, 
  }
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;