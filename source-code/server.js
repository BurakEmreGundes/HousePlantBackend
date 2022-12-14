const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const connectDB = require("./config/db")
const colors = require("colors")
const cookieParser = require("cookie-parser")
const errorHandler = require("./middlewares/error")


// Load env vars 
dotenv.config({path: './config/config.env'})

// Connect to database
connectDB()

// Route files
const plants = require("./routes/plants")
const auth = require("./routes/auth")
const searchPlants = require("./routes/searchPlants")


const app = express()

// Body parser 
app.use(express.json())

// Cookie parser
app.use(cookieParser())

// Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan("dev"))
}

// Mount routers
app.use("/api/v1/auth", auth)
app.use("/api/v1/plants", plants)
app.use("/api/v1/searchPlants",searchPlants)

app.use(errorHandler)

const PORT = process.env.PORT || 5050

const server = app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)

// Handle unhandled promise rejections
process.on('unhandledRejection', (err,promise) => {
    console.log(`Error: ${err.message}`.red)
    // Close server & exit process
    server.close(() => process.exit(1))
})
