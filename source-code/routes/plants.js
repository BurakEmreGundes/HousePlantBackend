const express = require('express')
const {
    getPlants,
    getPlant,
    createPlant,
    updatePlant,
    deletePlant
} = require('../controllers/plants')

const router = express.Router()

router
    .route('/')
    .get(getPlants)
    .post(createPlant)
router
    .route("/:id")
    .get(getPlant)
    .put(updatePlant)
    .delete(deletePlant)

    
module.exports = router