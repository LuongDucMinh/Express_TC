const express= require ('express');
const router = express.Router();
const refreshControllers = require('../controllers/refreshControllers');

router.get('/',refreshControllers)


module.exports = router