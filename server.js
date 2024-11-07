import  express from "express";
import "dotenv/config";
const app = express();


const PORT = 3000;

app.get("/",(req,res)=>{
    return res.send("hi everyone.")
})

app.listen(PORT,()=>{
    console.log("server is running "+PORT);
})