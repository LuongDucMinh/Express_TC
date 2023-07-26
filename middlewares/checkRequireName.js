

const checkRequireName = (req,res,next)=>{

    const {username,password}= req.body;
    if(!username || !password) 
    return res.status(400).json({message:' username and password are require'});
    next()
}

module.exports=checkRequireName