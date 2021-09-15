import { app } from './app.mjs'
import mongoose from 'mongoose'
import  dotenv  from 'dotenv'

//configuring envirnoment variables
dotenv.config({path:'./config.env'});

const port = process.env.PORT || 3000;

mongoose.connect(process.env.URI,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false,
  useUnifiedTopology: true
}).then(()=>console.log('DB connection succesful'));


const server = app.listen(port,()=>console.log(`server listening at port ${port}`));