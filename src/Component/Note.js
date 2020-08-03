import React, { useState, useRef, useEffect } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Button} from "@material-ui/core";
import {customNoteStyles,customButtonStyles,blurBackground,
} from "../custom-styles/note-expanded.js";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  useEffect(() => {
    // Execute after the render is completed
    document.addEventListener("mousedown", handleClick);
    // Remove if component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const [isClicked, setIsClicked] = useState(false);
  const note = useRef();

  function handleClick(event) {
    // If the current node contains the triggered event
    if (note.current.contains(event.target)) {
      // inside click
      return;
    }
    // outside click
    setIsClicked(false);
  }

  function expandCenter() {
    setIsClicked(true);
  }

  function shrinkBack() {
    setIsClicked(false);
  }

  return (
    <div>
      <div
        ref={note}
        onClick={expandCenter}
        onDoubleClick={shrinkBack}
        className="note"
        style={isClicked ? customNoteStyles : null}
      >
        <h1 contentEditable="true" className="editable title" onClick={props.updateTitle}>
          {props.title}
        </h1>
        <br></br>
        <p contentEditable="true" className="editable content">
          {props.content}
        </p>

        <Button
          onClick={deleteNote}
          style={isClicked ? customButtonStyles : null}
        >
          <DeleteOutlineIcon />
        </Button>
      </div>
      <div style={isClicked ? blurBackground : null}></div>
    </div>
  );
};

export default Note;
