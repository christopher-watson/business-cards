import axios from "axios";

export default {
  getUserInfo: function() {
    return axios.get("/api/users");
  },
  // updateUserInfo: function(id) {
  updateUserInfo: function(data) {
    // return axios.post(`/api/users/${id}`, data)
    return axios.post(`/api/users/`, data)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(err) {
      console.log(err)
    });   
  }

};
