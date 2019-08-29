import React, { useState, useEffect } from "react";
import myJournal from "../images/myJournal.png";
import NavigationBar from "./NavigationBar";
import "./Calendar.scss";
import { Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { postData, getData, deleteData } from "../actions/index.js";

function Calendar(props) {
  let item = props.post;

  useEffect(() => {
    props.getData();
  }, []);
  const handleDelete = event => {
    event.preventDefault();
    props.deleteData(item);
  };

  return (
    <div className="Calendar">
      <img src={myJournal} alt="My Journal"></img>
      <NavigationBar />
      <h2>Calendar</h2>

      {props.post.map(thing => (
        <div className="a">
          <h2>Note: {thing.note}</h2>
          <p>Date: {thing.date}</p>
        </div>
      ))}
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
