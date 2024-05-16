import express from "express";

import {value} from "@repo/common/config"

const app=express();

app.get('/',(req,res)=>{
  res.json({
    message:`${value}`,
    test:"test"
  })
})

app.listen(4002,()=>{
  console.log('listening to port 4002')
})