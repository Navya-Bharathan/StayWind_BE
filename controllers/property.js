const {Property} =require("../models/property");

const addNewProperty = async(req,res,next) =>{
    try{
        const {body} =req;
        const property=await Property.create(body);
        res.json(property);
    }
    catch(error){
        res.json({message:error.message});
    }

};

const updateProperty = async(req,res,next) =>{
    try{
        const{                            //get 'id' to find the property... Destructure the req
            params:{id},body
        } =req;  
        
        const property=await Property.findByIdAndUpdate(id,body);
        res.json(property);
    }
    catch(error){
        res.json({message:error.message});
    }
    
    
}
const getProperties = async(req,res,next) =>{            //get all the properties
    try{
        const properties=await Property.find({});
        res.json(properties);
    }
    catch(error){
        res.json({message:error.message});
    }
    
}
//get specific property
const getProperty = async(req,res,next) =>{
    try{
        const{                            //get 'id' to find the property
            params:{id},
        } =req;  
        
        const property=await Property.findById(id);
        res.json(property);
    }
    catch(error){
        res.json({message:error.message});
    }
    
}

const deleteProperty = async(req,res,next) =>{
    try{
        const{                            //get 'id' to find the property
            params:{id}
        } =req;  
        
        await Property.findByIdAndDelete(id);
        res.json("Property Deleted");
    }
    catch(error){
        res.json({message:error.message});
    }
    
    
    
}


module.exports ={
    addNewProperty,
    updateProperty,
    getProperties,
    getProperty,
    deleteProperty

}
