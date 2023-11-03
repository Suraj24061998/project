const mongoose=require("mongoose")
const userschema=new mongoose.Schema({
   
    name:String,
    mobile:String,
    email:String,
    address:String,
    country:String,
    state:String,
    pincode:String,
    
})
module.exports=mongoose.model("account",userschema)