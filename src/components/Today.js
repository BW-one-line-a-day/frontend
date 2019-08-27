import React, { useState, useEffect } from "react";
// import DailyEntry from "./DailyEntry";
import NavigationBar from "./NavigationBar";
import { Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { postData, getData } from "../actions/index.js";

function Today(props) {
  //axios request for list of previous entries on this day

  // function filterFunction(note) {
  //   if ()
  // }

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let todayDate = month + "-" + day + "-" + year;
  let todayDateNoDashes = month.toString() + day.toString() + year.toString();
  // let todayDateAsNum = parseInt(todayDateNoDashes);

  // console.log(day);
  const [item, setItem] = useState({
    note: "",
    user_id: localStorage.getItem("id"),
    date: todayDateNoDashes
  });

  useEffect(() => {
    props.getData();
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    console.log("item", item);
    props.postData(item);

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
      {/* {props.post.map(user => (
        <div>
          <p>{user.note.slice(-1)[0]}</p>
        </div>
      ))} */}
      {props.post.filter((post, index, array) => {
        console.log(post, index, array.length);
        // if (array.length == 26) {
        //   return <p>{post.note}</p>;
        // }
      })}
    </div>
  );
}
//const result = words.filter(word => word.length > 6);
const mapStateToProps = state => {
  return {
    ...state
    // post: state.post
  };
};

export default connect(
  mapStateToProps,
  { postData, getData }
)(Today);
