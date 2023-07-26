require('dotenv').config()
const UserModel = require('../models/UsersModels')
const jwt = require('jsonwebtoken')
const bycrypt = require('bcrypt')

const loginControllers = async (req, res,next) => {
  const { username, password } = req.body
  if (!username || !password)
    return res.status(400).json({ message: 'User is require' })

  const currentUser = await UserModel.findOne({ username })

  if (!currentUser)
    return res.status(400).json({ message: `${username} is not create` })

  const checkCurrentUser = await bycrypt.compare(password, currentUser.password)
  if (checkCurrentUser) {
    const token = jwt.sign(
      {
        user: {
          username: currentUser.username,
          roles: currentUser.roles,
        },
      },
      process.env.SECRET_KEY_TOKEN,
      {
       expiresIn:'10s',
      },
    )
    
    
    // refresh token
//     const refreshToken = jwt.sign(
//       {
//         user: {
//           username: currentUser.username[0],
//           roles: currentUser.roles,
//         },
//       },
//       process.env.SECRET_KEY_REFRESH,
//       { expiresIn: '1d' },
//     )

//     const filter = { username:currentUser.username };
// const update = { refreshToken:refreshToken};


//     const updateUser = await UserModel.findOneAndUpdate(filter, update, {
//       new: true
//     });



//     res.cookie('refresh_jwt', refreshToken);
    

    res.status(200).json(token);
    

  } else {
    res.status(401).json({ message: e.message})
    //
  }
}

module.exports = loginControllers
