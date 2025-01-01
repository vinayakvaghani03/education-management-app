const express=require("express")
const app=express();
const dotenv=require("dotenv");
const cors =require("cors")

dotenv.config();
app.use(express.json({limit:"10mb"}))
app.use(cors())

app.listen(process.env.PORT, ()=>{
    console.log(`Server started at port no. ${process.env.PORT}`)
})


