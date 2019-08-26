import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import "./Login.scss";

export default function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: ""
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
        props.history.push("/protected");
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
    <div className="Login">
      <img></img>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>Email</label>
            <input
              name="email"
              value={user.email}
              placeholder="example@mail.com"
              onChange={handleChange}
            />
          </li>
          <li>
            <label>Password</label>
            <input
              name="password"
              value={user.password}
              placeholder="enter password"
              onChange={handleChange}
            />
          </li>
          <button>Submit</button>
        </ul>
      </form>
    </div>
  );
}
