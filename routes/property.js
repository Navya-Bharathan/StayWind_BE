const express=require('express');

const {
    addNewProperty,
    updateProperty,
    getProperties,
    getProperty,
    deleteProperty,
}=require("../controllers/property");

const propertyRouter=express.Router();

propertyRouter.route("/").get(getProperties).post(addNewProperty);
propertyRouter.route("/:id").get(getProperty).put(updateProperty).delete(deleteProperty);



module.exports={
    propertyRouter,
}