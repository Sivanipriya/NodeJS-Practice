const mongoose=require('mongoose');
const schema=mongoose.Schema({
   
    name:{
        type : String,
        required:true,
    }
});
const model=mongoose.model("Ward", schema, "ward"); 
module.exports=model;