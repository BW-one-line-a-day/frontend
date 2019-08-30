import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import "./Login.scss";

import logo from "../../images/logo.png";
import joinUs from "../../images/joinUs.png";
import myJournal from "../../images/myJournal.png";
import welcomeBack from "../../images/welcomeBack.png";

export default function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    loading: false
  });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(
        "https://cesar-buildweek-onelineaday.herokuapp.com/api/auth/login",
        user
      )
      .then(response => {
        // console.log("user", user);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.id);
        props.history.push("/today");
        // setUser({ loading: false });
        console.log(response);
      })
      .catch(error => {
        console.log("error", error.response);
        // console.log("user", user);
        setUser({
          username: "",
          password: ""
        });
      });
  };

  return (
    <>
      <div className="Above-signup">
        <img src={logo}></img>
        {/* <button>Sign In</button> */}
      </div>

      <div className="Above-signup-button">
        <button onClick={() => props.history.push("/signup")}>
          Sign Up Page
        </button>
      </div>
      <div className="Login">
        <img src={welcomeBack}></img>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                placeholder="enter email"
                onChange={handleChange}
              />
            </li>
            <li>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                placeholder="enter password"
                onChange={handleChange}
              />
            </li>
            <button>Submit</button>
            <h1></h1>
            <h6 onClick={() => props.history.push("/signup")}>
              Need an account? Sign Up
            </h6>
          </ul>
        </form>
      </div>
    </>
  );
}
