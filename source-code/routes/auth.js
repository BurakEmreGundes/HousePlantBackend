const express = require('express');
const {register,login,getMe} = require("../controllers/auth")
const {protect} = require('../middlewares/auth')  

const router = express.Router() 

// Include other resource routers
const searchPlantsRouter = require('./searchPlants')

// Re-route into other resource routers
router.use("/:userId/searchPlants",searchPlantsRouter)


router.post('/register',register)
router.post('/login',login)
router.get('/me',protect,getMe)


module.exports = router