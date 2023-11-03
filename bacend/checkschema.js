const mongoose=require("mongoose")
const userschema=new mongoose.Schema({
   
    name:String,
    mobile:String,
    email:String,
    address:String,
    state:String,
    pincode:String,
    userid:{type:mongoose.Schema.Types.ObjectId,
        // ref:'newaccounts'
    },
        productid:{type:mongoose.Schema.Types.ObjectId,
        // ref:"newproducts"
        },
    
})
module.exports=mongoose.model("billadress",userschema)