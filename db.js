const mongoose=require('mongoose');

/*const connect=async () =>{
    try {
  await mongoose.connect(process.env.CONNECTION_STRING);
  console.log("connected to mongodb");
} catch (error) {
  throw error;
}
}
connect(); */
mongoose.connect(process.env.CONNECTION_STRING)
  
.catch((error)=>{
    console.log(error)
});

