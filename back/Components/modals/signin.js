
const  mongoose = require('mongoose');

const Signmodel=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    pass:{
        type:String
    }
},{timestamps:true});

module.exports=mongoose.model('Sign',Signmodel);