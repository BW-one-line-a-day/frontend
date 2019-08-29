import React, { useState } from "react";
import { getData } from "../actions";
import { connect } from "react-redux";

const FakeComp = props => {
  const [fakePost, setFakePost] = useState([]);
  console.log(props);
  //   let fakeSetter = setFakePost(props.post);
  //   console.log(fakeSetter);
  return <div>{/* <h1>Working!</h1> */}</div>;
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(FakeComp);
