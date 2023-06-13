import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import InputBox from "./InputBox";
import Table from "./Table";
// import Title from "./Title";
// import Story from "./Story";
// import NewText from "./NewText";
// import Navbar from "./Navbar";

function Crud() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [id, setId] = useState("");
  const [editMode, setEditMode] = useState(false);

  const activeEditMode = () => {
    setEditMode(true);
  };

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
  return (
    <div>
      
      <Table
        data={data}
        removeData={deleteDataHandler}
        setValueTrue={activeEditMode}
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
      <br />

    </div>
  );
}
export default Crud;
