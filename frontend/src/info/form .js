import React , { useEffect, useState } from "react";
const InfoForm = (props) => {
      const[id,setid] = useState("");
      const[Name,setName] = useState ("");
      const[Age , setAge] = useState ("");
      const[City ,setCity] = useState ("");
      const[ Mobile_Number,setMobile_Number] = useState("");
      const[Email ,setEmail] = useState("");
      const[isEdit,setEdit] = useState(false);
const infosubmit=(event)=>{
     if(!isEdit){
          const data = {
               isEdit:isEdit,
               Name : Name ,
               Age : Age,
               City : City,
               Mobile_Number : Mobile_Number,
               Email : Email,
          };
          props.mydata(data);
          
     }else{
          const data = {
               isEdit:isEdit,
               _id:id,
               Name : Name ,
               Age : Age,
               City : City,
               Mobile_Number : Mobile_Number,
               Email : Email,
          };
          props.mydata(data);
     }
};
useEffect ( ()=>{
     if (props.setform._id != null){
           setid (props.setform._id);
           setName(props.setform.Name);
           setAge(props.setform.Age);
           setCity(props.setform.City);
           setMobile_Number(props.setform.Mobile_Number);
           setEmail(props.setform.Email);
           setEdit(true);
     }

},[props]);
return(
    <form onSubmit={infosubmit}>
        <div className="form-group">
            <label>Name:</label>
            <input type= "text" placeholder="Enter Name" class = "form-control"
              onChange={(e)=> setName (e.target.value)}
              value={Name}>
            </input>
      </div>
       <div className="form-group">
            <label>Age:</label>
            <input type = "number" placeholder="Enter Age" class = "form-control"
              onChange={(e) => setAge(e.target.value)}
              value={Age}>
            </input>
       </div>
       <div className="form-group">
            <label>City:</label>
            <input type = "text" placeholder="Enter City" class = "form-control"
              onChange = {(e)=>setCity(e.target.value)}
              value={City}>
            </input>
       </div>
       <div className="form-group">
            <label>Mobile_Number:</label>
            <input type = "number" placeholder="Enter Mobile_Number" class = "form-control"
              onChange={(e) => setMobile_Number(e.target.value)}
              value={Mobile_Number}>
            </input>
       </div>
       <div className="form-group">
            <label>Email:</label>
            <input type = "text" placeholder="Enter Email" class = "form-control"
              onChange={(e) => setEmail (e.target.value)}
              value={Email}>
            </input>
       </div>
       <br></br>
       <button type="submit" className="btn btn-success">
          {isEdit ? "Update": "Create"}
        
       </button>
       
    </form>
)
};
export default InfoForm;

