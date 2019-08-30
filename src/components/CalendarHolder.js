// import { connect } from "react-redux";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import NavigationBar from "./NavigationBar";
import DatePick from "./DatePick.js";

export default function DatePick(props) {
  return (
    <>
      <NavigationBar />
      <h2>
        See past lines:{" "}
        <DatePicker selected={new Date(props.date)} onChange={handleChange} />
      </h2>
      <h3>put yesterday date here</h3>
      <h2></h2>
    </>
  );
}
