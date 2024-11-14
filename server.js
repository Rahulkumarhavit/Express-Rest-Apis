import  express from "express";
import "dotenv/config";
import routes from "./routes/index.js"
const app = express();


const PORT = 3000;
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(routes)

app.get("/",(req,res)=>{
    return res.send("hi everyone.")
})

app.listen(PORT,()=>{
    console.log("server is running "+PORT);
})