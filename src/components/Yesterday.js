import React, { useState, useEffect } from "react";
// import DailyEntry from "./DailyEntry";
import NavigationBar from "./NavigationBar";
import { Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { postData, getData } from "../actions/index.js";
import axios from "axios";

function Yesterday(props) {
  let date = new Date();
  let yesterday = date.getDate() - 1;
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let yesterdayDate = month + "-" + yesterday + "-" + year;
  let yesterdayDateNoDashes =
    month.toString() + yesterday.toString() + year.toString();

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
    if (post.date === yesterdayDateNoDashes) {
      return post;
    }
  });

  let noteMap = dateFilter.map(notes => {
    return notes.note;
  });
  console.log(noteMap);

  let noteLength = noteMap.length - 1;
  let last = noteMap[noteLength];

  const [yesterdayNote, setYesterdayNote] = useState([]);

  useEffect(() => {
    props.getData();
  }, []);
  console.log("yesterdayNote:", yesterdayNote);

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
  console.log("props", props);

  return (
    <>
      <NavigationBar />
      <h2>Yesterday</h2>
      <h3>{yesterdayDate}</h3>
      <h2>Quote from yesterday</h2>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={item.note}
          name="note"
          onChange={handleChange}
        />
        <Form.Button onSubmit={handleSubmit} value="Submit" name="submit">
          Edit
        </Form.Button>
      </Form>
      <p>{last}</p>
    </>
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
