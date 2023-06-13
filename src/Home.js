import { TextField } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ".//App.css";

function Home() {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getData = (e) => {
    const { value, name } = e.target;
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, date, password } = inpval;

    if (name === "") {
      toast.error("please Enter Name", { position: "top-center" });
    } else if (email === "") {
      toast.error("please Enter Email", { position: "top-center" });
    } else if (date === "") {
      toast.error("please Enter Date ", { position: "top-center" });
    } else if (password === "") {
      toast.error("please Enter Password", { position: "top-center" });
    } else if (password.length < 5) {
      toast.error("please Enter Valid Password", { position: "top-center" });
    } else {
      toast.success("Data Added Done", { position: "top-center" });
      localStorage.setItem("mohitdata", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {/* first colum start */}
          <div className="col set">
            <br />
            <h4 className="opa">Sing Up Form</h4>
            <br />
            <form>
              <TextField fullWidth
                label="Enter Name"
                type="text"
                name="name"
                onChange={getData}
                className="m-1"
              />
              <br />
              <TextField fullWidth
                label="Enter Email"
                type="email"
                name="email"
                onChange={getData}
                className="m-1"
              />
              <br />
              <TextField fullWidth
                type="date"
                name="date"
                onChange={getData}
                className="m-1"
              />
              <br />
              <TextField fullWidth
                label="Enter Password"
                type="password"
                name="password"
                onChange={getData}
                className="m-1"
              />
              <br />
              <button onClick={addData} className="btn btn-primary m-2">
                Submit
              </button>
            </form>
            <p>
              Have Already Account ? <NavLink to="/login"> Login</NavLink>
            </p>
          </div>
          {/* first colum end */}
          {/* second colum start */}
          <div className="col">
            <img
              src="https://cdn.dribbble.com/users/846207/screenshots/9192312/media/c821e24ed3cc26b9e43e2decfdee20ce.gif"
              width={800}
              height={500}
            />
          </div>
          {/* second colum end */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
export default Home;
