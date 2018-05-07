let express = require("express");
let users = require("./state.js").users;
const bodyParser = require("body-parser");
let ContactRoutes = require("./routes/ContactRoutes");
const app = express();


app.use(ContactRoutes)
app.use(express.static('public'))
app.use(bodyParser.json());

// app.use(function(req,res,next)
// {
//  if(req.method==="GET" && req.path ==="/users" ){
//    return res.json({users});
//  }
//  if(req.method==="GET" && req.path ==="/users/1" ){
//     return res.json(users[0]);
//   }
//   if(req.method==="POST" && req.path ==="/users" ){
//     return res.json(users.push({}));
//   }
//   if(req.method==="PUT" && req.path ==="/users/1" ){
//     return res.json({users});
//   }
//   if(req.method==="DELETE" && req.path ==="/users/1" ){
//     return res.json(users.pop());
//   }
//  return res.send("what do you want?");
// });


//make snippets for these (get,post, etc.)
app.get("/users", function(req, res, next)
{
    return res.json({users});
});
app.get("/users/:userId", function(req, res, next)
{
   
     res.json(users.find(user => user._id == req.params.userId));
});

app.post("/users", function(req, res, next)
{
    let newUser = req.body;
    users.push(newUser);
    res.json(newUser);
});
app.put("/users/1", function(req, res, next)
{
    return res.json({users});
});
app.delete("/users/1", function(req, res, next)
{
    return res.json(users.pop());
});

// when a requst comes in, I can do many things with it
// app.use(function hello1(request,response,next){
//     request.message = "Hello from hello1";
//     console.log("Hello 1");
//     next();
//    });
//    app.use(function(request,response,next){
//     console.log(request.message);
//     next();
//    });
//    app.use(function(request,response,next){
//     console.log("Hello 3");
//     response.send("Hello 3");
//    });
   



app.listen(3002, (err) => {
    if (err) {
    return console.log("Error", err);
    }
console.log("Web server is now living in apartment 3002");
});
