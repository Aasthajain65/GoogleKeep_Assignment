import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './App.css';
import View from 'react';
import Header from "./Component/Header.js"
import CreateNote from "./Component/CreateNote"
import Note from "./Component/Note.js"
// import Navbar from "./Component/Navbar.js"

function App() {
  const [addItem, setAddItem] = useState([]);


  //Note Logic

  const addNote = (note) => {
    //alert("i am clicked")
    setAddItem((prevData)=>{
      return [...prevData,note];
    });

    //console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((olddata) =>
    olddata.filter((currdata,indx) => {
      return indx !== id;
    })
    );
  };


  function updateTitle(event, id)
  {
    if (event.currentTarget.id === "note") {
      setAddItem(prevData => {
        let foundNoteIndex = prevData.findIndex(item => item.key === id);
        prevData[foundNoteIndex].title = event.target.value;
        return [...prevData]
      });
    }
  }

  function updateContent(event, id)
  {
    setAddItem(prevData => {
      let foundNoteIndex = prevData.findIndex(item => item.key === id);
      prevData[foundNoteIndex].content = event.target.value;
      return [...prevData]
    });
  }

  return (
   
   <div>
    <Header/> 
    <CreateNote passNote={addNote}/>
    {addItem.map((val,index)=>{
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
    })
    }
   </div>
  );
}

export default App;
