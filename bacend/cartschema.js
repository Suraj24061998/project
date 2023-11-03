const mongoose=require("mongoose")
const cartschema=new mongoose.Schema({
    userid:{type:mongoose.Schema.Types.ObjectId,
    ref:'newaccounts'
},
    productid:{type:mongoose.Schema.Types.ObjectId,
    ref:"newproducts"
    },
   
    
  

})
module.exports=mongoose.model("cartdata",cartschema)