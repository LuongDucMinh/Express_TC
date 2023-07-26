
const verifyRole = (role) => (req,res,next)=>{
const userRoles =res.roles;
if(userRoles.find(r => r===role))     {
    next()
}

else{
    res.sendStatus(403)
}

}


module.exports=verifyRole