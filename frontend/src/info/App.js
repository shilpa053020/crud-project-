import React , { useEffect, useState } from "react";
import InfoForm from "./form .js";
import InfoTable from "./table.js";
import axios from "axios";


const App = () => {
    const [data, datafunc] = useState([]);
    const [editdata, editdatafunc] = useState([]);

 const create = (data) => {
    if (data.isEdit === false) {
    axios
        .post("http://localhost:5000/info/create", data)
        .then((res) => {
        console.log("creation");
        getAll();
     });
     } else {
        axios
            .put("http://localhost:5000/info/update", data)
            .then((res) => {
            console.log("updation");
            getAll();
        });
    }
};

useEffect(() => {
    getAll();
},[]);


const getAll = () => {
  axios
    .get("http://localhost:5000/info/get")
    .then((res) => {
     console.log("getall user");
     datafunc(res.data);
    });
};
const update = (data) => {
    editdatafunc(data);
};
const del = (data) => {
    var option = window.confirm(`Are you Want to delete ${data.Name}`);
     if (option) {
     axios
        .delete(`http://localhost:5000/info/delete/${data._id}`)
        .then((res) => {
         getAll();
    });
  }
};

return (
    <div className="container mt-3">
        <div className="row">
            <div className="col-4">
                <InfoForm mydata={create} setform={editdata} />
            </div>
            <div className="col-8">
              <InfoTable getData={data} setData={update} del={del} />
            </div>
        </div>
        </div>
    )
};

export default App;
