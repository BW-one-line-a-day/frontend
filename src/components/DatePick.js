import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export default function DatePick(props) {
  // function handleChange(date) {
  //    function convertDate(date = new Date()) {
  //        let year = date.getFullYear();
  //        let month = date.getMonth() + 1;
  //        let day = date.getDate();

  //        if(month < 10) month = "0" + month;
  //        if(day < 10) day = "0" + day;

  //        return `${year}-${month}-${day}`;
  //     }
  //     props.setDate(convertDate(date))
  // }
  return (
    <>
      <h2>
        Select date of picture:{" "}
        <DatePicker
          selected={new Date(props.date)}
          // onChange = {handleChange}
        />
      </h2>
    </>
  );
}
