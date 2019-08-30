import React, { useState, useEffect } from "react";
import axios from "axios";
// import DailyEntry from "./DailyEntry";
import NavigationBar from "./NavigationBar";
import { Form, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { postData, getData } from "../actions/index.js";
import "./Today.scss";
import myJournal from "../images/myJournal.png";
import DailyCard from "./DailyCard.js";

// const NavigationBar = styled(NavigationBar)`
//    color:
// `;

function Today(props) {
  console.log(props.post);
  let date = new Date();
  let day = date.getDate();
  //if less than 10
  if (day < 10) {
    day = "0" + day.toString();
  } else {
    day = day.toString();
  }
  let month = date.getMonth() + 1;
  //if less than 10
  if (month < 10) {
    month = "0" + month.toString();
  } else {
    month = month.toString();
  }
  let year = date.getFullYear();
  let todayDate = month + "-" + day + "-" + year;
  let todayDateNoDashes = month.toString() + day.toString() + year.toString();

  const [item, setItem] = useState({
    note: "",
    user_id: localStorage.getItem("id"),
    date: todayDateNoDashes,
    editing: false
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

  let dateFilterDayMonth = idFilter.filter(post => {
    if (post.date.substring(0, 4) === todayDateNoDashes.substring(0, 4)) {
      return post;
    }
  });
  let dateFilterReversed = dateFilterDayMonth.reverse();
  dateFilterReversed.shift();

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
    console.log("working");
  }, []);

  const toggleEditing = () => {
    setItem({ editing: !item.editing });
  };
  console.log(item.editing);
  const handleDelete = postId => {
    // let newFilter = post.filter(element => element.id === post.id);

    axios
      .delete(
        `https://cesar-buildweek-onelineaday.herokuapp.com/api/dailyposts/${postId}`
      )
      .then(response => {
        window.location.reload();
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
        window.location.reload();
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
      <div className="pushLeft">
        <NavigationBar />
      </div>
      {/* <h3>{todayDate}</h3> */}
      <h1>Today</h1>

      <Form onSubmit={handleSubmit}>
        <div className="submit-class">
          <Input
            className="input-field"
            type="text"
            value={item.note}
            name="note"
            onChange={handleChange}
          />
          <Button
            className="ui teal unattached button customButtonBorder"
            value="Submit"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
      <br></br>
      {todayPost[0] &&
        todayPost.map(notes => {
          return (
            <div className="today-quote">
              <h1>{notes.note}</h1>
              {/* <p>{notes.id}</p> */}
              <button
                className="ui teal unattached button customButtonBorder"
                onClick={() => handleDelete(notes.id)}
              >
                Delete today's note
              </button>
              {/* <button onClick={toggleEditing}>Redo today's note</button> */}
              <div className="editBlock">
                <input
                  placeholder="Redo today's note"
                  onChange={e =>
                    setEditNote({ ...editNote, note: e.target.value })
                  }
                  value={editNote.note}
                />
                <button
                  className="ui teal unattached button customButtonBorder"
                  onClick={() => handleEdit(notes.id)}
                >
                  Submit edit
                </button>
              </div>
            </div>
          );
        })}
      <div>
        {todayPost[0] &&
          dateFilterReversed.map((note, index) => {
            return <DailyCard key={index} note={note} />;
          })}
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { postData, getData }
)(Today);
