import React from "react";
import ".//App.css";

function Table(props) {
  return (
    <div className="container" style={{width:"100%"}}>
      <br />
      <table className="table table-striped table-light" style={{width:"100%"}}>
        <tbody>
          <tr>
            <th>S.No</th>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>CITY</th>
            <th>OPERATION</th>
          </tr>
          {props.data.map((value, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.city}</td>
              <td>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => props.removeData(value.id)}
                >
                  Remove
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    props.setid(value?.id);
                    props.setname(value?.name);
                    props.setemail(value?.email);
                    props.setcity(value?.city);
                  }}
                >
                  Edit Data
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
