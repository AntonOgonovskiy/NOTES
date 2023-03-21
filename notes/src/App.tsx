import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import AskNameModal from "./components/nameModal/AskNameModal";
import NotesField from "./components/body/notesField/notesField";

function App() {
  return (
    <div className="App">
      <AskNameModal />
      <Header />
      <NotesField />
    </div>
  );
}

export default App;
