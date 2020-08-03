import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";


const CreateNote = (props) => {
  // by default setexpand  is false
  const [expand, setExpand] = useState(false);
  // const form = useRef();

  //onclick expand the textfield
  const expandIt = () => {
    console.log("i am clicked1 ");
    setExpand(true);
  };

  // ondouble click shrink the textfield
  const shrink = () => {
    console.log("i am clicked");
    setExpand(false);
  };

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    // object destructuring
    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log("name >>>" ,name);
  };

  const addEvent = () => {
    if (note.title === "" && note.content === "") {
      return;
    }
    props.passNote(note);
    // setting text field back to normal/empty
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <div onDoubleClick={shrink}>
      <form className="create-note" onClick={expandIt} onDoubleClick={shrink}>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={InputEvent}
          placeholder="Title"
          autoComplete="off"
        />
        {expand ? (
          <textarea
            rows=""
            columns=""
            name="content"
            value={note.content}
            onChange={InputEvent}
            placeholder="write a note..."
          />
        ) : null}
        {expand ? (
          <Button onClick={addEvent}>
            <AddIcon />
            {/* <AddCircleIcon/> */}
          </Button>
        ) : null}
      </form>
    </div>
  );
};

export default CreateNote;
