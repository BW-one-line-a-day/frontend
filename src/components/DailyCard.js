import React from "react";
import "./Yesterday.scss";

export default function DailyCard({ note }) {
  let day = note.date.substring(2, 4);
  let month = note.date.substring(0, 2);
  let year = note.date.substring(4, 8);
  return (
    <div className="paragraph">
      <h3 className="dateDisplay">
        {month}-{day}-{year}
      </h3>
      <p>{note.note}</p>
    </div>
  );
}
