import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Signup.scss";
// import { logValidationWarning } from "jest-validate/build/utils";
import logo from "../../images/logo.png";
import joinUs from "../../images/joinUs.png";
import myJournal from "../../images/myJournal.png";
import welcomeBack from "../../images/welcomeBack.png";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Signup = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
    // loading: false
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
        // setUser({ loading: false });
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

  // if (user.loading === false) {
  return (
    <>
      <div className="Above-signup">
        <img src={logo}></img>
        {/* <button>Sign In</button> */}
      </div>
      <div className="Above-signup-button">
        <button onClick={() => props.history.push("/")}>Sign In</button>
      </div>
      <div className="Signup">
        <img src={joinUs}></img>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label>Email</label>
              <input
                name="email"
                value={user.email}
                placeholder="enter email"
                onChange={handleChange}
              />
            </li>
            <li>
              <label>Password</label>
              <input
                name="password"
                value={user.password}
                placeholder="choose password"
                onChange={handleChange}
              />
            </li>
            <button>Submit</button>
            <h1></h1>
            <h6 onClick={() => props.history.push("/")}>
              Already have an account? Sign In
            </h6>
          </ul>
        </form>
      </div>
    </>
  );
  // } else {
  //   return (
  //     <h3>
  //       <Loader type="Plane" color="#E57458" height="100" width="100" />
  //     </h3>
  //   );
  // }
};

export default Signup;
