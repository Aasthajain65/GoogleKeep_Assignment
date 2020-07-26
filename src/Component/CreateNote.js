import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

  // by default setexpand  is false
  const [expand, setExpand] = useState(false);

  //onclick expand the textfield
  const expandIt = () => {
    setExpand(true);
  }

  // ondouble click shrink the textfield
  const shrink = () => {
    setExpand(false);
  }

  const [note,setNote]=useState({
    title:"",
    content:"",
  });

  const InputEvent = (event) => {

    // const value = event.target.value;
    // const name = event.target.name;

    // object destructuring
    const {name,value} = event.target;

    setNote((prevData) =>{
      return{
        ...prevData,
        [name]:value,
      };
    });
    console.log(name);
  };

  const addEvent = () => {
    props.passNote(note);

    // setting text field back to normal/empty
    setNote({
    title:"",
    content:"",
    });
   

  };

  return(
    <div >
      <form className="create-note" onDoubleClick={shrink}>
        {expand?
          <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title"autoComplete="off"/> :null}
          
          <textarea rows="" columns="" name="content" value={note.content} onChange={InputEvent} placeholder="write a note..." onClick={expandIt} onDoubleClick={shrink}/>
          {expand?
          <Button onClick={addEvent}> 
          <AddIcon/>
          </Button>:null}

      </form>
    </div>
  )
};

export default CreateNote;
