const mongoose =require('mongoose') ;
const UserSchema = new mongoose.Schema({
    username:{
    type:String,
    require:true
    },
    password:{
        
        type:String,
        require:true
        },
        refreshToken:{
type:String,
require:true
        },
    roles:{
        
        type:[String],
        default:['100']
        },
   }
)

const UserModel = mongoose.model('users',UserSchema)
module.exports=UserModel

//[ String]