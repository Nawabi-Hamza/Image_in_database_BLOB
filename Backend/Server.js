const express = require("express")
const env = require("dotenv")
const app = express()
const db = require("./database")
app.use(express.json())
env.config()


// for check api work very well
app.get("/api",(req,res)=>{
   res.send("Here Is Backend ...")
})


// For get data from mysql 
app.get("/image",(req,res)=>{
    const q = "SELECT id, content, image from post";
    db.query(q,(err,data)=>{
        if(data){
            return res.status(200).json(data)
            /* 
                the below code we can use it in backend or frontend it does not have problem if you want to retrive image from backend as image
                you can use the below code for convert BLOB to image from backend
            */
            // const b64 = Buffer.from(data[0].image).toString('base64')
            // const mimeType = 'image/png/jpg';
            // res.status(200).send(`<img src="data:${mimeType};base64,${b64}" height="300px" width="auto" />`);
        }
        else return res.status(500).json(err)
    })
})




// if use any directory in api link it will give errror
app.use("*",(req,res)=>{
    res.send("What are You Doing You Can not access here !")
})
   
// ==================SERVER RUNNIG================================
app.listen(process.env.SERVER_PORT,()=>{
    console.log(`Server Is Running In ${process.env.SERVER_PORT}`)
})