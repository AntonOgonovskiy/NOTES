import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import AskNameModal from "./components/nameModal/AskNameModal";
import NotesField from "./components/body/notesField/notesField";
import TagsField from "./components/body/tagsField/tagsField";

function App() {
  return (
    <div className="App">
      <AskNameModal />
      <Header />
      <TagsField />
      <NotesField />
    </div>
  );
}

export default App;
