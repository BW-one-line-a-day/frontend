import React, { useState, useEffect } from "react";
// import DailyEntry from "./DailyEntry";
import NavigationBar from "./NavigationBar";
import DailyCard from "./DailyCard.js";
import { Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { postData, getData } from "../actions/index.js";
import axios from "axios";
import myJournal from "../images/myJournal.png";
import "./Yesterday";

function Yesterday(props) {
  let date = new Date();
  let yesterday = date.getDate() - 1;
  //if less tha n10
  if (yesterday < 10) {
    yesterday = "0" + yesterday.toString();
  } else {
    yesterday = yesterday.toString();
  }
  let month = date.getMonth() + 1;
  //if less tha n10
  if (month < 10) {
    month = "0" + month.toString();
  } else {
    month = month.toString();
  }
  let year = date.getFullYear();
  let yesterdayDate = month + "-" + yesterday + "-" + year;
  let yesterdayDateNoDashes = month + yesterday + year.toString();

  const [item, setItem] = useState({
    note: "",
    user_id: localStorage.getItem("id"),
    date: yesterdayDateNoDashes
  });

  let post = props.post;

  let idFilter = post.filter(id => {
    if (id.user_id == item.user_id) {
      return id;
    }
  });

  let dateFilter = idFilter.filter(post => {
    if (post.date.substring(0, 4) === yesterdayDateNoDashes.substring(0, 4)) {
      return post;
    }
  });
  const dateFilterReversed = dateFilter.reverse();

  useEffect(() => {
    props.getData();
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    console.log("item", item);
    props.postData(item);
    props.history.push("/yesterday");
    setItem({
      note: ""
    });
  };

  const handleChange = event => {
    console.log(item);
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  return (
    <div class="yesterday">
      <img src={myJournal} alt="My Journal"></img>
      <NavigationBar />
      <h1>Yesterday</h1>
      <div className="yesterday-quote">
        {dateFilterReversed.map((note, index) => {
          return <DailyCard key={index} note={note} />;
        })}
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
  { postData, getData }
)(Yesterday);
