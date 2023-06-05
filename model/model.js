const mongoose = require ('mongoose');

mongoose.connect("mongodb+srv://cinujoseph11:cinu@cluster0.vuqjuou.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("db connected")
})
.catch(err=>console.log(err));
let Schema = mongoose.Schema;
const employeeSchema=new Schema({
    sname:String,
    age:Number,
    pos:String,
    salary:Number
});


var employeeModel = mongoose.model("employees",employeeSchema);
module.exports = employeeModel;
