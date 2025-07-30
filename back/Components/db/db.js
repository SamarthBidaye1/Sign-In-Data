const mongoose=require('mongoose');
require('dotenv').config();
const dbfun=async()=>{
    try {
    await mongoose.connect(process.env.MONGO_URI); 
    console.log('Connect to DB')
} catch (error) {
    console.log('Data Base NOT Connected')
}
}

module.exports=dbfun;