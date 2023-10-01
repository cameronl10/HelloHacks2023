const express = require('express');
const router = express.Router();
const User = require('../models/user')
const cors = require("cors");
router.use(cors());
router.use(express.json());
router.get('/',async (req,res) => {
    try{
        const users = await User.find();
        res.json(users);
    } catch (err){
        res.status(500).json({message:err.message});
    }
})

router.get('/:id',async (req,res) => {
    const user = await User.find(params.body.id);
    res.status(200).json(user);
})
router.post('/',async (req,res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        elo:   req.body.elo
    })

    try{
        const newUser = await user.save();
        res.status(200).json({message:"added user"})
    } catch(err){
        res.status(400).json({message: err.message})
    }
})
router.patch('/:id',(req,res) =>{
    
})

module.exports = router;