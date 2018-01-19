const axios = require("axios")
const url = "http://localhost:4567/api/auth"

class Content {
  getAuth(){
    axios.post(url, {
      email: "jacoyutorius@gmail.com",
      password: "111111"
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  async getAuthWithASync(){
    var res = await axios.post(url, {
      email: "jacoyutorius@gmail.com",
      password: "111111"
    })
    console.log(res.data)
  }
}

// module.exports = Content
new Content().getAuthWithASync()