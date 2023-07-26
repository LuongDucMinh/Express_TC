require('dotenv').config()
const jwt = require('jsonwebtoken')
const UserModel = require('../models/UsersModels')

const handleVerifyJWT = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

console.log(req.headers)

  if (!token) return res.sendStatus(401)



  
  try {
    const {
      user: { username, roles },
    } = jwt.verify(token, process.env.SECRET_KEY_TOKEN)

    const currentUser = await UserModel.findOne((user)=> {
        user.username===username} )

        if(!currentUser) return res.sendStatus(401);
    res.sendStatus(200);
    res.roles = roles
    next()
  } catch (e) {
    res.status(401).json({ message: e.message })
  }
}

module.exports = handleVerifyJWT
