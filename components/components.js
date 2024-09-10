

const arr=['web','coding','app'];
const getcourse=(req,res)=>{
    res.status(200).json({
      "message":"success da",
      "data":req.body,
    });
    
};
const postcourse=(req,res)=>{
  console.log(req.body);
  const ar=req.body.course;
  ar.forEach(element => {
    arr.push(element);
  });
  res.send(arr)
};
const deletecourse=(req,res)=>{
  const {id=''}=req.params;
  console.log(id);
    const ind=req.params.id;
    arr.splice(ind,1);
    res.send(arr)
};
const updatecourse= (req,res)=>{
    const ind=req.params.ind;
    const name=req.body.newname;
    arr[ind]=name;
    res.send(arr);
};



module.exports={
    getcourse,postcourse,updatecourse,deletecourse
}

