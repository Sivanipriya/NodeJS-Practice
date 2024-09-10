const express=require('express');
const router=express.Router();
const{getcourse,postcourse,updatecourse,deletecourse}=require ('../components/components');
router.get('/getcourse',getcourse);
router.post('/postcourse',postcourse);
router.put('/updatecourse/:ind',updatecourse);
router.delete('/deletecourse/:id',deletecourse);

module.exports=router;