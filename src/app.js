const express = require("express");
const app = express();
const morgan=require('morgan')

// const logging = (req,res,next) => 
// {
//   console.log("Request mad!");
//   next();
// };


app.use(morgan('hi'));
module.exports = app;
