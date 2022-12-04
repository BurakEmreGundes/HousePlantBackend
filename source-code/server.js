const express = require("express")
const dotenv = require("dotenv")


// Route files
const plants = require("./routes/plants")

// Load env vars 
dotenv.config({path: './config/config.env'})


const app = express()

// Mount routers
app.use("/api/v1/plants", plants)

const PORT = process.env.PORT || 5050

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    )

