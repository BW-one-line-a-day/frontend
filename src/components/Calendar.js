import React from "react";
import NavigationBar from "./NavigationBar";
import { connect } from "react-redux";

function Calendar() {
  return (
    <>
      <NavigationBar />
      <div>Calendar</div>
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
  {}
)(Calendar);
