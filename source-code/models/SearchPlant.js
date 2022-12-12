const mongoose = require('mongoose')

const SearchPlantSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    plant:{
        type: mongoose.Schema.ObjectId,
        ref: 'Plant',
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    } 
})


module.exports = mongoose.model("SearchPlant", SearchPlantSchema)