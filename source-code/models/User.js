  
  const mongoose = require('mongoose')

  const UserSchema = new mongoose.Schema({
      name:{
          type: String,
          required: [true, "Please add a name"],
          unique: true,
          trim: true,
          maxLength: [50, "Name can not be more than 50 characters"]
      },
      slug : String,
      description: {
          type: String,
          required : [true, "Please add a description"],
          maxlength: [500, "Description can not be more than 50 characters"]
      },

      phone: {
        type: String,
        maxlength: [20, "Phone can not be more than 20 characters"]
    },
      email:{
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please add a valid email"]
    }
  })
