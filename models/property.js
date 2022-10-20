const {Schema ,model, default: mongoose}=require('mongoose');

const propertySchema=new Schema({
    _ownerID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Owner",
         required:true},
    //propertyId:{type:String, unique:true,required:true},
    name:{type:String, required:true},
    type:{type:String, required:true},
    location:{type:String,required:true},
    pincode:{type:Number,required:true},
    address:{type:String,required:true},
    country:{type:String,required:true},
   images:{type:[String]},
   price:{type:{Number}},
   keywords:{type:[String], required:true},
   rating:{type:Number, min:0, max:5},
   availableDate:{type:[Date]}
});
const Property=model("Property",propertySchema);

module.exports={
    Property,
}