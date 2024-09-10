const express=require('express');
const router=express.Router;
const {cre,del,up,get}=require('./components/components.js');
router.get('./getcourse',get);
router.delete('./deletecourse',del);
router.put('./updatecourse',up);
router.post('./createcourse',cre);

module.exports=router;