import React from 'react';

export default function Yesterday() {

  let date = new Date();
  let day = date.getDate() - 1;
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let todayDate = month + "-" + day + "-" + year;

  return(
  <>
      <h2>Yesterday</h2>
      <h3>{todayDate}</h3>
      <div>Input placeholder</div>
  </>
  )
}