import React from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = () => {

  return(
    <div >
      <form className="create-note">
          <input type="text" name="title"  placeholder="Title"autoComplete="off"/>
          <textarea rows="" columns="" name="content"  placeholder="write a note..."/>
          <Button >
          <AddIcon/>
          </Button>

      </form>
    </div>
  )
};

export default CreateNote;
