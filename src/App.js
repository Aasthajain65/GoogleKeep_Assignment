import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Header from "./Component/Header.js"
import CreateNote from "./Component/CreateNote"

function App() {
  return (
   
   <div>
    <Header/> 
    <CreateNote />
   </div>
  );
}

export default App;
