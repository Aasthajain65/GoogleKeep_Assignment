import React, { useState } from "react";
import "./App.css";
// import Header from "./Component/Header.js";
import Newheader from "./Component/Newheader.js";
import CreateNote from "./Component/CreateNote";
import Note from "./Component/Note.js";
import Footer from "./Component/Footer.js";


function App() {
  const [addItem, setAddItem] = useState([]);
  const [searchItem, setSearchItem] = useState([]);
  const [searchBool, setSearchBool] = useState(0);
  console.log(addItem);
  console.log("setttt", searchItem);


  //Search Function
  const searchHandler = (value) => {
    console.log("search called", value);
    if (value === "") {
      setSearchBool(0);
      return;
    }
    let newData = addItem.filter((data) => {
      // return data.title == value;
      console.log("old >>", data.title === value)
      console.log(data.title.indexOf(value) !==-1)
      return (data.title.indexOf(value)!==-1)
    });
    console.log(">>>>> NewData", newData);
    
    setSearchItem(newData);
    setSearchBool(1);
  };

  //Adding new Note Logic
  const addNote = (note) => {
    //alert("i am clicked")
    setAddItem((prevData) => {
      return [...prevData, note];
    });

    //  console.log(note);
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
    console.log("console>>>>>")
    if (event.currentTarget.id === "note") {
      setAddItem((prevData) => {
        let foundNoteIndex = prevData.findIndex((item) => item.key === id);
        prevData[foundNoteIndex].title = event.target.value;
        return [...prevData];
      });
    }
    setSearchBool(0)
  }

  function updateContent(event, id) {
    setAddItem((prevData) => {
      let foundNoteIndex = prevData.findIndex((item) => item.key === id);
      prevData[foundNoteIndex].content = event.target.value;
      return [...prevData];
    });
    setSearchBool(0)
  }

  // componentWillMount() {
  //   // load items array from localStorage, set in state
  //   let itemsList = localStorage.getItem('items')
  //   if (itemsList) {
  //     this.setState({
  //       items: JSON.parse(localStorage.getItem('items'))
  //     })
  //   }
  // }
  // componentDidUpdate() {
  //   // on each update, sync our state with localStorage
  //   localStorage.setItem('items', JSON.stringify(this.state.items))
  // }

  return (
    
    <div>
       
      <Newheader searchHandler={searchHandler} />
      {/* <Header /> */}
      <CreateNote passNote={addNote} />
      {searchBool === 0
        ? addItem.map((val, index) => {
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
        : searchItem.map((val, index) => {
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
