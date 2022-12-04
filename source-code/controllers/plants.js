
// @desc    Get all plants
// @route   GET /api/v1/plants
// @access  Public
exports.getPlants = (req, res, next) =>{
    res.status(200).json({success: true, msg: "Show all Plants"})
}

// @desc    Get single plant
// @route   GET /api/v1/plants/:id
// @access  Public
exports.getPlant = (req, res, next) =>{
    res.status(200).json({success: true, msg: "Show one plant"})
}

// @desc    Create new plant
// @route   GET /api/v1/plants
// @access  Private
exports.createPlant = (req, res, next) =>{
    res.status(200).json({success: true, msg: "Create Plant"})
}

// @desc    Update plant
// @route   PUT /api/v1/plants/:id
// @access  Private
exports.updatePlant = (req, res, next) =>{
    res.status(200).json({success: true, msg: "Update plant"})
}


// @desc    Delete plant
// @route   DELETE /api/v1/plants/:id
// @access  Private
exports.deletePlant = (req, res, next) =>{
    res.status(200).json({success: true, msg: "Delete plant"})
}