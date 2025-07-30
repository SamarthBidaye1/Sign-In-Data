const express=require('express')
const signin = require('../modals/signin');
const router=express.Router();

// Create data
router.post('/signin',async(req,res)=>{
    const {name,email,pass}=req.body;
    const user = await signin.findOne({email});
    if(user) return res.status(200).json('User Avaiable');

    const create=new signin({
        name,
        email,
        pass
    })
    await create.save();
    res.status(200).json('Data Create hogaya hai bhaisab!')
})

// delete data
router.delete('/delete/:id',async(req,res)=>{
    await signin.findByIdAndDelete(req.params.id)
    res.send('id deleted')
})

// get data
router.get('/getdata',async(req,res)=>{
    const finding=await signin.find()
    res.send(finding);
})

module.exports=router;