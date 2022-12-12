const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middlewares/async')
const SearchPlant = require('../models/SearchPlant')
const Plant = require('../models/Plant')


// @desc    Get search plants 
// @route   GET /api/v1/searchPlants
// @route   GET /api/v1/plants/:plantId/searchPlants
// @route   GET /api/v1/plants/:userId/searchPlants
// @access  Public
exports.getSearchPlants = asyncHandler(async (req, res, next) =>{
    let query

    if(req.params.plantId){
        query = SearchPlant.find({plant: req.params.plantId}).populate("plant").populate("user")
    }else if(req.params.userId){
        query = SearchPlant.find({user: req.params.userId}).populate("plant").populate("user")
    }else{
        query = SearchPlant.find().populate("plant").populate('user')
    }

    const searchPlants = await query

    res.status(200).json({
        success: true, count: searchPlants.length, data: searchPlants
    })
})

// @desc    Get single search plants 
// @route   GET /api/v1/searchPlants/:id
// @access  Public
exports.getSearchPlant = asyncHandler(async (req, res, next) =>{
    const searchPlant = await SearchPlant.findById(req.params.id).populate('plant').populate('user')

    if(!searchPlant){
        return next(new ErrorResponse(`No searchPlant with the id of ${req.params.id}`),404)
    }

    res.status(200).json({success: true, data: searchPlant})
})


// @desc    Add Search Plant 
// @route   POST /api/v1/plants/:plantId/searchPlants
// @access  Private
exports.addSearchPlant = asyncHandler(async (req, res, next) =>{
    req.body.plant = req.params.plantId

    const plant = await Plant.findById(req.params.plantId)

    if(!plant){
        return next(
            new ErrorResponse(`No plant with the id of ${req.params.plantId}`),
            404
        )
    }

    const searchPlant = await SearchPlant.create(req.body)

    res.status(200).json({success: true, data: searchPlant})
})