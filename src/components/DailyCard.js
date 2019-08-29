import React from "react";
import "./Yesterday";

export default function DailyCard({ note }) {
  let day = note.date.substring(2, 4);
  let month = note.date.substring(0, 2);
  let year = note.date.substring(4, 8);
  return (
    <div>
      <h3>
        {month}-{day}-{year}
      </h3>
      <p className="paragraph">{note.note}</p>
    </div>
  );
}
