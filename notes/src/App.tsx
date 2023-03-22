import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import AskNameModal from "./components/nameModal/AskNameModal";
import NotesField from "./components/body/notesField/notesField";
import Management from "./components/body/managemantSection/Management";
import CreateNote from "./components/body/managemantSection/createNote/CreateNote";
import ChangeModal from "./components/body/changeNote/changeModal";

function App() {
  return (
    <div className="App">
      <AskNameModal />
      <CreateNote />
      <ChangeModal />
      <Header />
      <Management />
      <NotesField />
    </div>
  );
}

export default App;
