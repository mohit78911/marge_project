import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Table from "./Table";
import InputBox from "./InputBox";
import Navbar from "./Navbar";
// import { TextField } from "@mui/material";

export default function Details(props) {

  const location = useNavigate()
  
  const [loginData, setLoginData] = useState([]);
  console.log(loginData);

  const getDetails = () => {
    const getUser = localStorage.getItem("mohitdata");
    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);
      setLoginData(user);
    }
  };

  const logOut = (e)=>{
    e.preventDefault();
    localStorage.removeItem("mohitdata")
    // disableLoginStaus();
  }
  useEffect(() => {
    getDetails();
  },[]);

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [id, setId] = useState("");
  // const [editMode, setEditMode] = useState(false);

 

  useEffect(() => {
    getDataHandler();
  }, []);

  const setValuenull = () => {
    setName("");
    setEmail("");
    setCity("");
  };
  async function getDataHandler() {
    axios
      .get("https://64193b3c29e7e36438f8acd6.mockapi.io/Demo")
      .then((result) => setData(result.data))
      .catch((error) => console.log(error));
  }

  async function putDataHandler() {
    let newData = {
      id: id,
      name: name,
      email: email,
      city: city,
    };
    axios
      .put(`https://64193b3c29e7e36438f8acd6.mockapi.io/Demo/${id}`, newData)
      .then(() => getDataHandler(), setValuenull())
      .catch((error) => console.log(error));
  }
  async function postDataHandler(e) {
    e.preventDefault();
    let newData = {
      id: id,
      name: name,
      email: email,
      city: city,
    };
    axios
      .post("https://64193b3c29e7e36438f8acd6.mockapi.io/Demo", newData)
      .then(() => getDataHandler(), setValuenull())
      .catch((error) => console.log(error));
  }

  async function deleteDataHandler(id) {
    axios
      .delete(`https://64193b3c29e7e36438f8acd6.mockapi.io/Demo/${id}`)
      .then(() => getDataHandler())
      .catch((error) => console.log(error));
  }

  const clearInputHandler=()=>{
    setName("");
    setCity("");
    setEmail("");
  }
  // const disableLoginStaus = ()=>{ 
  //   props.setLoginStatus(false)
  // }
  return (
    <>
      <br />
      <div>Welcome,Buddy</div>
      {loginData.length === 0 ? "error" : <h3>{loginData[0].name}</h3>}
      {/* <NavLink className="btn btn-primary logbtn" onClick={()=>logOut()} to="/login" >
        LogOut
      </NavLink> */}
      <br />
      <div>
        
      <Table
        data={data}
        removeData={deleteDataHandler}
        // setValueTrue={activeEditMode}
        setname={setName}
        setemail={setEmail}
        setcity={setCity}
        setid={setId}
      />
      <InputBox
        name={name}
        email={email}
        city={city}
        setname={setName}
        setemail={setEmail}
        setcity={setCity}
        onSubmit={postDataHandler}
        editHandler={putDataHandler}
        clearHandler={clearInputHandler}
      />
      </div>
      
    </>
  );
}
