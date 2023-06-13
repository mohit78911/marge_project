import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField } from "@mui/material";

function Login(props) {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  // const [data, setData] = useState([]);
  console.log(inpval);

  const getData = (e) => {
    // console.log(e.target.value)

    const { value, name } = e.target;
    // console.log(value)

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    // console.log(inpval)

    const { email, password } = inpval;

    const getuserArr = localStorage.getItem("mohitdata");
    console.log(getuserArr);

    if (email === "") {
      toast.error("please Enter Email", { position: "top-center" });
    } else if (password === "") {
      toast.error("please Enter Password", { position: "top-center" });
    } else if (password.length < 5) {
      toast.error("please Enter Valid Password", { position: "top-center" });
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        if (userlogin.length === 0) {
          toast.error("Invalid Details",{position:"top-center"});
        } else {
          console.log("Successfull user Login " );
           history("/Details");
           localStorage.setItem("Login",true)
        }
      }
    }
  };

  // const enableLoginStaus = ()=>{ 
  //   props.setLoginStatus(true)
  // }
 
  return (
    <div>
      <h3 style={{opacity:"0.2",textDecoration:"underline"}}>Login Form</h3>
      <div className="container">
        <div className="row">
          <div className="col set">
            <br/>
            <form>
              <TextField fullWidth
                label="Enter Email Address"
                type="email"
                name="email"
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
              <button className="btn btn-primary m-1" onClick={addData}>
                Login
              </button>
            </form>
          </div>
          <div className="col">
          <br/>
            <img src="https://media.tenor.com/GqtJYfEzi84AAAAC/undecided-thinking.gif" height={400} width={450}/>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
export default Login;
