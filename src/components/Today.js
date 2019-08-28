import React, { useState, useEffect } from "react";
// import DailyEntry from "./DailyEntry";
import NavigationBar from "./NavigationBar";
import { Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { postData, getData, deleteData } from "../actions/index.js";

function Today(props) {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let todayDate = month + "-" + day + "-" + year;
  let todayDateNoDashes = month.toString() + day.toString() + year.toString();

  const [item, setItem] = useState({
    note: "",
    user_id: localStorage.getItem("id"),
    date: todayDateNoDashes
  });

  let post = props.post;

  let idFilter = post.filter(id => {
    if (id.user_id == item.user_id) {
      return id;
    }
  });
  console.log(idFilter);

  let dateFilter = idFilter.filter(post => post.date === todayDateNoDashes);

  let noteMap = dateFilter.map(notes => {
    return notes.note;
  });

  let noteLength = noteMap.length - 1;

  let last = noteMap[noteLength];

  useEffect(() => {
    props.getData();
  }, []);

  // const handleDelete = event => {
  //   props.deleteData(item);
  // };

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
    //
    <div>
      <NavigationBar />
      <h2>Today</h2>
      <h3>{todayDate}</h3>

      <Form onSubmit={handleSubmit}>
        <Input
          label="Entry for today"
          type="text"
          value={item.note}
          name="note"
          onChange={handleChange}
        />

        <Form.Button value="Submit" type="submit">
          Submit
        </Form.Button>
      </Form>

      <p>{last}</p>
    </div>
  );
}
//const result = words.filter(word => word.length > 6);
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { postData, getData, deleteData }
)(Today);
