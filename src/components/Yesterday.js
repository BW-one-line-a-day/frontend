import React from "react";
import NavigationBar from "./NavigationBar";
import { connect } from "react-redux";
// import { Form } from "semantic-ui-react";

function Yesterday() {
  return (
    <>
      <NavigationBar />
      <div>Yesterday</div>
      {/* <FormData label="Entry for today" type="text" value="Quote" name="quote" />
      <Form.Button onSubmit={handleSubmit} value="Submit" name="submit">
        Edit
      </Form.Button> */}
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
)(Yesterday);
