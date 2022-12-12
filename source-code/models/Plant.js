const mongoose = require('mongoose')
const slugify = require('slugify')

const PlantSchema = new mongoose.Schema({
    plantCustomID:{
        type: String,
        required: [true, "Please add a custom id"],
        unique: true
    },
    plantName:{
        type: String,
        required: [true, "Please add a name"],
        unique: true,
        trim: true,
        maxLength: [50, "Name can not be more than 50 characters"]
    },
    slug : String,
    plantDescription: {
        type: String,
        required : [true, "Please add a description"],
        maxlength: [500, "Description can not be more than 50 characters"]
    },
    plantAverageRating : {
        type: Number,
        min: [1, "Rating must be at least 1"],
        max: [10, "Rating must can not be more than 10"]
    },
    photoUrl:{
        type: String,
        required: [true, "Please add a photo"]
    },
    plantIsActive:{
        type: Boolean,
        default : true
    },
    waterTime:{
        type: String,
        required: [true, "Please add a waterTime"],
    },
    createdAt: {
        type: Date,
        default: Date.now
    } 
})


// Cascade delete search when a plant is deleted
PlantSchema.pre('remove', async function (next) {
    await this.model('searchPlant').deleteMany({ plant: this._id})
    next()
})


// Create plant slug from the name
PlantSchema.pre('save', function(next){
    this.slug = slugify(this.plantName,{lower:true})
    next()
})

module.exports = mongoose.model("Plant", PlantSchema)