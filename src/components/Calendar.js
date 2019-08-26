import React, { useState, useEffect } from 'react';
import DatePick from "./DatePick";
import Axios from 'axios';

export default function Calendar() {
  const [date, setDate] = useState("")

//   useEffect(() => {
//     Axios
//         .get(``)
//         .then(res => {
           
//             setDate(res.data)
//             console.log("res.data = ", res.data)
//             console.log("res.date = ", res.data.date)})
//         .catch(err => console.log("OOPS. API ERROR: ", err))
// }, [date]);


  return(
    <div className="react-calendar">
      <div>Calendar</div>
      {/* <DatePick date={date} setDate={setDate} /> */}
    </div>
  )
}