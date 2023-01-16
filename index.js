const express = require("express");
const app = express();
const port = process.env.PORT  || 3000;     //process.env.PORT uses for giving the port no when we listen on online hosting.
const path = require("path");
const hbs = require("hbs");


//define static path 
const static_path = path.join(__dirname, "/public");
 const template_path = path.join(__dirname, "/templates/views");
const partial_path = path.join(__dirname,"/templates/partial"); 

//using of static website by express.
  app.use(express.static(static_path));

//setting the view engine 
app.set("view engine","hbs");
app.set('views',template_path)
hbs.registerPartials(partial_path);     

app.get("/" , (req,res) => {
    res.render("index");
})


app.get("/weather" , (req,res) => {
    res.render("weather");
})


app.get("*" , (req,res) => {
    res.render("404error" , {
        errorMessage : "OOPS ! Page does not found",
    })  
})

app.listen(port , () =>{
     console.log(`server is listening at port no. ${port}`);
})


