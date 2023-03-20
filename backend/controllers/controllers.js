import user from "../model/userschema.js";

export const createuser = async(req,res)=>{
    const data= new user({
    
    Name:req.body.Name,
    Age:req.body.Age,
    City:req.body.City,
    Mobile_Number:req.body.Mobile_Number,
    Email:req.body.Email,
    
});

console.log(data.Name);
await data.save();
res.status(200).json(data);
console.log("user created successfully");
};

export const getuser = async(req,res)=>{
    const getdata = await user.find();
    res.status(200).json(getdata);
    console.log("all user data");
}; 

export const updateuser = async(req,res)=>{
    const update = await user.findByIdAndUpdate(
        {_id:req.body._id},
        {
          $set:{
            Name:req.body.Name,
            Age:req.body.Age,
            City:req.body.City,
            Mobile_Number:req.body.Mobile_Number,
            Email:req.body.Email,

        },
        },
        {new:true}
    );
    res.status(200).json(update);
    console.log("user updated successfully");
};

export const deluser = async(req,res)=>{
    await user.findByIdAndDelete(req.params.id);
    res.status(200).json(" user deleted successfully");
    console.log(" user deleted");
    
};

