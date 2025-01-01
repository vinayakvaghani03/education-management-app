const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose")

dotenv.config();
app.use(express.json({ limit: "10mb" }))
app.use(cors())

// database connection

mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to the mongoDB"))
.catch((error)=>console.log("Not Connected to the mongoDB"))

app.listen(process.env.PORT, () => {
    console.log(`Server started at port no. ${process.env.PORT}`)
})


