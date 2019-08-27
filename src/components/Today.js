import React from "react";
import DailyEntry from "./DailyEntry";
import NavigationBar from "./NavigationBar";

export default function Today() {
  //axios request for list of previous entries on this day
  const data = [
    {
      name: "Donald",
      content: "I'm a duck",
      date: ["month 08", "day 10", "year 2019"]
    },
    {
      name: "Daisy",
      content: "I'm another duck.",
      date: ["month 08", "day 11", "year 2019"]
    },
    { name: "Daisy", content: "", date: ["month 08", "day 12", "year 2019"] }
  ];
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let todayDate = month + "-" + day + "-" + year;
  const handleSubmit = event => {
    //axios post call
  };
  return (
    //
    <div>
      <NavigationBar />
      <h2>Today</h2>
      <h3>{todayDate}</h3>
      <DailyEntry />
      <button onSubmit={handleSubmit}>Submit!</button>
    </div>
  );
}
