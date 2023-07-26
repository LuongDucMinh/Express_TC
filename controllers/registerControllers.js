const bycrypt = require('bcrypt');
const UserModel = require('../models/UsersModels');

const registerControllers = async (req,res)=>{

    const {username,password}=req.body;
    const foundUser= await UserModel.findOne({username});
    if(foundUser) return res.sendStatus(409);
    if(!username || !password) return res.status(400).json({message:'User is require'});

    const hashPassword = await bycrypt.hash(password,6 )

    const newUser =
    {
     username,
     password:hashPassword

    }
    
    await UserModel.create(newUser);


    res.sendStatus(201)
}


module.exports=registerControllers