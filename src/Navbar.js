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
    <>
    <div>
      <nav>
        <div className="logoNameWrapper">
        <h4 >Authentication Form</h4>
        </div>
        <div>
        <ul >
              <li>
                <NavLink to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink  to="/login">
                  login
                </NavLink>
              </li>
              <li>
                {login ? (
                  <div>
                    <button className="navStyleLogout btn btn-danger" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                ) : null}
              </li>
            </ul>
        </div>
      </nav>
    </div>

    </>
    
  );
}
