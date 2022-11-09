const express = require("express");
const app = express();
const morgan=require('morgan')

const errorHandler=(err,req,res,next)=>{
  console.error(err);
  res.send(res.send(err));
}


const routeNotExist = (req,res,next) => 
{
  res.send(`${req.path} doesnt exist`)
  next();
};

const nameValidation=(req,res,next)=>{
    const name=req.params.name;
    if(name.length>10)
    {
      next("ERROR DETECTED");
    }
    else{
      res.send("invalid name")
      
    }
  }
  app.get("/name/:name",nameValidation)
  
  
  
  
  
  app.use(morgan('dev'));
  app.use(errorHandler);
  app.use(routeNotExist)

module.exports = app;

