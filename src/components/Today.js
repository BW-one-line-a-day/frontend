import React, { useState } from "react";
// import DailyEntry from "./DailyEntry";
import NavigationBar from "./NavigationBar";
import { Form, Legend } from "semantic-ui-react";
import { connect } from "react-redux";
import { postData } from "../actions/index.js";

function Today(props) {
  //axios request for list of previous entries on this day

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let todayDate = month + "-" + day + "-" + year;
  let todayDateNoDashes = month.toString() + day.toString() + year.toString();
  let todayDateAsNum = parseInt(todayDateNoDashes);

  // console.log(day);

  const [item, setItem] = useState({
    quote: "",
    date: todayDateAsNum
  });

  const handleSubmit = event => {
    event.preventDefault();
    console.log("item", item);
    props.postData(item);
  };

  const handleChange = event => {
    console.log(item);
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  return (
    //
    <div>
      <NavigationBar />
      <h2>Today</h2>
      <h3>{todayDate}</h3>
      <Form.Input
        label="Entry for today"
        type="text"
        value={item.quote}
        name="quote"
        onChange={handleChange}
      />
      <Form.Button onSubmit={handleSubmit} value="Submit" type="submit">
        Submit
      </Form.Button>
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
  { postData }
)(Today);
