import React, { useState, useEffect } from "react";
import myJournal from "../images/myJournal.png";
import NavigationBar from "./NavigationBar";
import "./Calendar.scss";
import { Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { postData, getData, deleteData } from "../actions/index.js";

function Calendar(props) {
  let post = props.post;
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  let todayDateNoDashes = month.toString() + day.toString() + year.toString();

  const [item, setItem] = useState({
    note: "",
    user_id: localStorage.getItem("id"),
    date: todayDateNoDashes,
    editing: false
  });

  let idFilter = post.filter(id => {
    if (id.user_id == item.user_id) {
      return id;
    }
  });

  console.log(idFilter);

  useEffect(() => {
    props.getData();
  }, []);

  return (
    <div className="main-container">
      <img src={myJournal} alt="My Journal"></img>

      <div className="pushLeft">
        <NavigationBar />
      </div>
      <h2>All</h2>
      <div className="Calendar">
        {idFilter.map(thing => (
          <div className="date-and-note">
            <h2>{thing.note}</h2>
            <p>{thing.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { postData, getData, deleteData }
)(Calendar);
