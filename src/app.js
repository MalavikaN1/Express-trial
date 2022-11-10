const express = require("express");
const app = express();
const morgan=require('morgan')
const notes=require('./data/notes-data');
const router = require("./notes/notes.router");
const dotenv=require('dotenv')
dotenv.config()

app.use('/notes',router);

// console.log(process.env.DATABASE_CONNECTION_STRING)

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
      next("Invalid Name");
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

