const express = require("express")
const app=express()
const port=4000
app.get('/',(req,res) =>{
    res.send("Hello TalentSprint")
})

app.listen(port,() =>{
    console.log("server listening on 4000")
})