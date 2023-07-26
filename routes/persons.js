const express= require ('express');
const router = express.Router();
const ROLES = require('../constants/roles')
const checkRequireName = require('../middlewares/checkRequireName');
const verifyRole = require('../middlewares/verifyRole');

const {getAllPerson,deletePerson,updatePerson,postPerson} =require('../controllers/personControllers');
const { route } = require('./root');




router.use(checkRequireName)
router.get('/',verifyRole(ROLES.USER),getAllPerson)
router.use(verifyRole(ROLES.ADMIN))
router.post('/',postPerson)
router.delete('/',deletePerson)
router.put('/',updatePerson)




module.exports=router