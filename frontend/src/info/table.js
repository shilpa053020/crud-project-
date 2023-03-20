const InfoTable = (props) => {
    return (
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Mobile_Number</th>
            <th>Email</th>
            <th>Edit</th>
            <th>delete</th>
          </tr>
       </thead>
       <tbody>
          {props.getData.length > 0 ? (
            props.getData.map((user) => (
              <tr key={user._id} >
                <td>{user.Name}</td>
                <td>{user.Age}</td>
                <td>{user.City}</td>
                <td>{user.Mobile_Number}</td>
                <td>{user.Email}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={(event) => {
                      props.setData(user);
  
                    }}
                  >Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(event) => {
                      props.del(user);
  
                    }}
                  >Delete
                  </button>
                </td>
                </tr>
          ))
          ) : (
            <tr>NO DATA</tr>
          )}
         </tbody>
                 
        </table>
    );   
};

  
  export default InfoTable ;