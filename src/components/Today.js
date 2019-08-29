import React, { useState, useEffect } from "react";
import axios from "axios";
// import DailyEntry from "./DailyEntry";
import NavigationBar from "./NavigationBar";
import { Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { postData, getData } from "../actions/index.js";
import "./Today.scss";
import myJournal from "../images/myJournal.png";

// const NavigationBar = styled(NavigationBar)`
//    color:
// `;

function Today(props) {
  // console.log(props.post);
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let todayDate = month + "-" + day + "-" + year;
  let todayDateNoDashes = month.toString() + day.toString() + year.toString();

  const [item, setItem] = useState({
    note: "",
    user_id: localStorage.getItem("id"),
    date: todayDateNoDashes,
    editing: true
  });

  const initialNote = {
    note: ""
  };

  const [editNote, setEditNote] = useState(initialNote);

  // console.log(item);

  let post = props.post;
  // console.log(post);

  let idFilter = post.filter(id => {
    if (id.user_id == item.user_id) {
      return id;
    }
  });
  // console.log(idFilter);

  let dateFilter = idFilter.filter(post => post.date === todayDateNoDashes);

  let todayPost = dateFilter[dateFilter.length - 1];
  todayPost = [todayPost];
  console.log(todayPost);

  // let lastItem = dateFilter.pop();

  let noteMap = dateFilter.map(notes => {
    return notes.note;
  });

  // console.log(noteMap);

  let noteLength = noteMap.length - 1;

  let last = noteMap[noteLength];

  useEffect(() => {
    props.getData();
  }, []);

  const handleDelete = postId => {
    // let newFilter = post.filter(element => element.id === post.id);

    axios
      .delete(
        `https://cesar-buildweek-onelineaday.herokuapp.com/api/dailyposts/${postId}`
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  const editOneNote = note => {
    setEditNote(note);
  };

  const handleEdit = postId => {
    const newLine = {
      note: editNote
    };
    console.log("NEWLINE", newLine);
    console.log("POSTID", postId);

    axios
      .put(
        `https://cesar-buildweek-onelineaday.herokuapp.com/api/dailyposts/${postId}`,
        editNote
      )
      .then(res => {
        console.log(res);
        setItem({ note: "" });
      })
      .catch(err => console.error("error", err.response));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("item", item);
    props.postData(item);
    props.history.push("/yesterday");
    setItem({
      note: ""
    });
  };

  const handleChange = event => {
    console.log(item);
    setItem({ ...item, [event.target.name]: event.target.value });
  };
  console.log("props", props);

  return (
    //
    <div className="today">
      <img src={myJournal} alt="My Journal"></img>
      <NavigationBar />
      <h3>{todayDate}</h3>
      <Form onSubmit={handleSubmit}>
        <Input
          className="input-field"
          type="text"
          value={item.note}
          name="note"
          onChange={handleChange}
        />
        <Button
          className="ui teal unattached bottom medium button"
          value="Submit"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      <br></br>
      {todayPost[0] &&
        todayPost.map(notes => {
          return (
            <div>
              <h1>{notes.note}</h1>
              <p>{notes.id}</p>
              <button onClick={() => handleDelete(notes.id)}>delete</button>
              {/* <button onClick={() => editOneNote(id)}>Edit</button> */}
              <label>Input for .put</label>
              <input
                onChange={e =>
                  setEditNote({ ...editNote, note: e.target.value })
                }
                value={editNote.note}
              />
              <button onClick={() => handleEdit(notes.id)}>Submit edit</button>
            </div>
          );
        })}
    </div>
  );
}
//const result = words.filter(word => word.length > 6);
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { postData, getData }
)(Today);
