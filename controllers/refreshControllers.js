const jwt = require('jsonwebtoken')
const UserModel = require('../models/UsersModels');



const refreshControllers = (req, res)=>{
    const refresh_jwt = req.cookies?.refresh_jwt
    if (!refresh_jwt) return res.sendStatus(401)
  
    const currentUser = UserModel.findOne({username})

        const CurrentUserRefresh_jwt=currentUser.refreshToken
        
  
    if (CurrentUserRefresh_jwt!==refresh_jwt) return res.sendStatus(401)
  
    try {
      const decoded = jwt.verify(refresh_jwt, process.env.SECRET_KEY_REFRESH)
  
      if (decoded.username !== currentUser.username) {
        res.sendStatus(401)
      }
  
      const token = jwt.sign(
        {
          user: {
            username: currentUser.username,
            role: currentUser.role,
          },
        },
        process.env.SECRET_KEY_TOKEN,
  
        {
          expiresIn: '10m',
        },
      )
  
      res.json(token)
    } catch (e) {}
}

module.exports= refreshControllers