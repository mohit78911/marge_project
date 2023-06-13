import React from "react";
import ".//App.css";
import { NavLink, Link, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  let login = localStorage.getItem("Login") 
  let navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.setItem("login",false)
    localStorage.removeItem("Login");
    localStorage.removeItem("mohitdata");
    navigate("/");
  };
  return (
    <div>
      <div>
        <div className="row align ">
          <div className="col">
            <h4 className="align floatleft font">Authentication Form</h4>
          </div>
          <div className="col">
            <ul className="floatright">
              <li>
                <NavLink className="navStyle" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="navStyle" to="/login">
                  login
                </NavLink>
              </li>
              <li>
                {login ? (
                  <div>
                    <button  style={{
                      backgroundColor: "#0d6efd",
                      color: "white",
                      padding: "8px",
                      borderRadius: "10px",
                    }} className="navStyle" onClick={handleLogout}>
                      
                      Logout
                    </button>
                  </div>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
