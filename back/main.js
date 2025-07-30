const express=require('express');
const dbfun = require('./Components/db/db');
const router = require('./Components/routes/sign');
const app=express();
app.use(express.json());
require('dotenv').config();
const cors=require("cors");
app.use(cors());
app.use('/app',router);


dbfun().then(()=>{
app.listen(process.env.PORT,()=>{
    console.log('Serever On')
})
})
