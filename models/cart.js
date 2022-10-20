const {Schema ,model}=require('mongoose');
const{Property}=require("./property");
const {User}=require("./user");

const cartSchema=new Schema({
    _propertyId:{type:monggose.Schema.Types.ObjectId ,
        ref:"Property",
        required:true
    
    },
    //roomId:{type:String,required:true},
    _userId:{type:monggose.Schema.Types.ObjectId ,
        ref:"User",
        required:true
    
    },
   
}) 
const Cart=model("Cart",cartSchema);

module.exports={
    Cart,
}