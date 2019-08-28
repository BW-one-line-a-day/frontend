// import React from "react";
import NavigationBar from "./NavigationBar";
// import { connect } from "react-redux";

// function Calendar() {
//   return (
//     <>
//       <NavigationBar />
//       <div>Calendar</div>
//     </>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     ...state
//   };
// };

// export default connect(
//   mapStateToProps,
//   {}
// )(Calendar);

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export default function DatePick(props) {
  function handleChange(date) {
    function convertDate(date = new Date()) {
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      if (month < 10) month = "0" + month;
      if (day < 10) day = "0" + day;
      return `${year}-${month}-${day}`;
    }
    props.setDate(convertDate(date));
  }

  return (
    <>
      <NavigationBar />
      <h2>
        See past lines:{" "}
        <DatePicker selected={new Date(props.date)} onChange={handleChange} />
      </h2>
    </>
  );
}
