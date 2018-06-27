const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Name: { 
    type: String, 
    required: true 
  },
  Email: { 
    type: String, 
    required: true 
  },
  Photo: { 
    type: String, 
    required: true 
  },
  Phone: { 
    type: String, 
    required: true 
  },
  Twitter: { 
    type: String, 
    required: true 
  },
  Fb: { 
    type: String, 
    required: true 
  },
  Link: { 
    type: String, 
    required: true 
  },
  Git: { 
    type: String, 
    required: true 
  }
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;