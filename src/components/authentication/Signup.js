import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Signup.scss";

const Signup = props => {
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
        "https://cesar-buildweek-onelineaday.herokuapp.com/api/auth/register",
        user
      )
      .then(response => {
        // localStorage.setUser("token", response.data.password);
        props.history.push("/");
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
        setUser({
          username: "",
          password: ""
        });
      });
  };

  return (
    <div className="Signup">
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
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </li>
          <button>Submit</button>
        </ul>
      </form>
    </div>
  );
};

export default Signup;
