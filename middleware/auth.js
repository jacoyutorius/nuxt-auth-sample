// export default function(context){
//   context.userAgent = process.serverdd ? context.req.headers['user-agent'] : navigator.userAgent
// }

const axios = require("axios")

export default async function asyncAuth() {
  var url = "http://127.0.0.1:4567/api/auth"
  // var params = { email: "jacoyutorius@gmail.com", password: "111111" }
  // var res = await axios.post(url, params)
  // console.log(res)
  // return (res.status === "success") ? res.user : {}
  return { user: "" }
}