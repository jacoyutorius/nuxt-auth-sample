// export default function(context){
//   context.userAgent = process.serverdd ? context.req.headers['user-agent'] : navigator.userAgent
// }

const axios = require("axios")

module.exports = async function asyncAuth() {
  var params = { email: "jacoyutorius@gmail.com", password: "111111" }
  var res = await await axios.post(url, params)
  console.log(res)
  return (res.status === "success") ? res.user : {}
}