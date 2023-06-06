const express = require("express");
const empModel = require('./model/model')
const app = new express();
const cors = require('cors');

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("hai")
})
app.get('/about',(req,res)=>{
    res.send("about page")

})
app.post('/login',(req,res)=>{
    console.log(req.body)
    res.send("data added")
})

app.post('/new',(req,res)=>{
    console.log(req.body)
    new empModel(req.body).save()
    res.send("data added to db");
})
app.get('/view',async(req,res)=>{
    var data = await empModel.find();

    res.send(data);
})
app.delete('/remove/:id',async(req,res)=>{
    let id =  req.params.id
    await empModel.findByIdAndDelete(id)
    res.send("data deleted")
})

app.put('/edit/:id',async(req,res)=>{
    let id=req.params.id;
    await empModel.findByIdAndUpdate(id,req.body)
    res.send("data updated")

})
app.listen(3005,(req,res)=>{
    console.log("port is running in 3005")
})
