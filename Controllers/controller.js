const router=require('express').Router();
const db=require('../database/databaseconfig');

router.get("/",(req,res,next)=>{
    const data = db.aggregate([{
        $project : {
            _v:0,
        }
}]).exec();
data.then((response)=>{
    if(response.length>0){
        return res.status(200).json({
            success:true,
            data:"messge sent",
        })
    }
    else{
        return res.status(200).json({
            data:"no data",
        })
    }
}).catch((err)=>{
console.log(err);
})
})
module.exports = router
