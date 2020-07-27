import React, { useState } from "react";
import "./App.css";
import Header from "./Component/Header.js";
import CreateNote from "./Component/CreateNote";
import Note from "./Component/Note.js";
import Footer from "./Component/Footer.js";

function App() {
  const [addItem, setAddItem] = useState([]);

  //Adding new Note Logic
  const addNote = (note) => {
    //alert("i am clicked")
    setAddItem((prevData) => {
      return [...prevData, note];
    });

    //console.log(note);
  };

  // delete Note
  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  // Update Note
  function updateTitle(event, id) {
    if (event.currentTarget.id === "note") {
      setAddItem((prevData) => {
        let foundNoteIndex = prevData.findIndex((item) => item.key === id);
        prevData[foundNoteIndex].title = event.target.value;
        return [...prevData];
      });
    }
  }

  function updateContent(event, id) {
    setAddItem((prevData) => {
      let foundNoteIndex = prevData.findIndex((item) => item.key === id);
      prevData[foundNoteIndex].content = event.target.value;
      return [...prevData];
    });
  }

  return (
    <div>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
            updateTitle={updateTitle}
            updateContent={updateContent}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
