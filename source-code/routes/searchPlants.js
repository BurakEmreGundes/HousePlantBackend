const express = require('express')
const {protect,authorize} = require("../middlewares/auth")
const router = express.Router({ mergeParams:true })
const {getSearchPlants, getSearchPlant, addSearchPlant} = require("../controllers/searchPlants")



router.route('/').get(getSearchPlants).post(addSearchPlant)
router.route('/:id').get(getSearchPlant)




module.exports = router