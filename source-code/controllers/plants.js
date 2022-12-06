const Plant = require("../models/Plant")
const ErrorResponse = require("../utils/errorResponse")
const asyncHandler = require("../middlewares/async")


// @desc    Get all plants
// @route   GET /api/v1/plants
// @access  Public
exports.getPlants = asyncHandler(async (req, res, next) =>{
        const plants = await Plant.find()

        res.status(200).json({
            success: true, data: plants
        })
})

// @desc    Get single plant
// @route   GET /api/v1/plants/:id
// @access  Public
exports.getPlant = asyncHandler(async (req, res, next) =>{
        const plant = await Plant.findById(req.params.id)

        if(!plant){
            return next(new ErrorResponse(`Plant not found with id of ${req.params.id}`,404))
        }

        res.status(200).json({success: true, data: plant})
})

// @desc    Create new plant
// @route   GET /api/v1/plants
// @access  Private
exports.createPlant = asyncHandler(async (req, res, next) =>{
        const plant = await  Plant.create(req.body)
        res.status(201).json({success: true, data: plant})        
})

// @desc    Update plant
// @route   PUT /api/v1/plants/:id
// @access  Private
exports.updatePlant = asyncHandler(async (req, res, next) =>{
        const plant = await Plant.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators:true
        })

        if(!plant){
            return next(new ErrorResponse(`Plant not found with id of ${req.params.id}`,404))
        }

        res.status(200).json({success: true, data: plant})
})


// @desc    Delete plant
// @route   DELETE /api/v1/plants/:id
// @access  Private
exports.deletePlant = asyncHandler(async (req, res, next) =>{
        const plant = await Plant.findByIdAndDelete(req.params.id)

        if(!plant){
            return next(new ErrorResponse(`Plant not found with id of ${req.params.id}`,404))
        }

        res.status(200).json({success: true, data: {}})
})