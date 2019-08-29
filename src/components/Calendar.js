import React, { useState, useEffect } from "react";

import NavigationBar from "./NavigationBar";
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
    <div>
      <NavigationBar />
      <h2>Calendar</h2>
      {props.post.map(thing => (
        <div>
          <h2>Note: {thing.note}</h2>
          <p>Date: {thing.date}</p>
          <button onClick={handleDelete}>Delete Post</button>
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
