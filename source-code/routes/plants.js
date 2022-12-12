const express = require('express')
const {
    getPlants,
    getPlant,
    createPlant,
    updatePlant,
    deletePlant
} = require('../controllers/plants')

// Include other resource routers
const searchPlantsRouter = require('./searchPlants')

const router = express.Router()

const {protect, authorize} = require('../middlewares/auth')


// Re-route into other resource routers
router.use("/:plantId/searchPlants",searchPlantsRouter)


router
    .route('/')
    .get(getPlants)
    .post(protect,authorize('admin'),createPlant)
router
    .route('/:id')
    .get(getPlant)
    .put(protect,authorize('admin'),updatePlant)
    .delete(protect,authorize('admin'),deletePlant)

    
module.exports = router