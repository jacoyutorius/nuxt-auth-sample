require "sinatra"
require "sinatra/reloader"
require "json"
require "pp"
require "pry"
require "pry-doc"
require "hashie"

before do
  headers 'Access-Control-Allow-Origin' => '*'
  headers 'Access-Control-Allow-Headers' => 'Origin, X-Requested-With, Content-Type, Accept'
  headers 'accept' => 'application/json'
end

get "/" do
  { msg: "hi" }.to_json
end

get "/api/users" do
  [
    { user: "yuto ogi", email: "jacoyutorius@gmail.com" },
    { user: "doragon yano", email: "yano@gmail.com" }
  ].to_json
end

post "/api/auth" do
  data = Hashie::Mash.new(JSON.parse(request.body.read))

  5.times do |i|
    p "sleep #{i + 1}"
    sleep 1
  end

  auth = (data.email == "jacoyutorius@gmail.com" && data.password == "111111")
  if auth
    {
      status: "success",
      user: { name: "yuto ogi", email: "jacoyutorius@gmail.com" }
    }.to_json
  else
    {
      status: "failed",
      error: "invalid auth params"
    }.to_json
  end  
end