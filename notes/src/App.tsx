import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import AskNameModal from "./components/nameModal/AskNameModal";
import NotesField from "./components/body/notesField/notesField";
import Management from "./components/body/managemantSection/Management";

function App() {
  return (
    <div className="App">
      <AskNameModal />
      <Header />
      <Management />
      <NotesField />
    </div>
  );
}

export default App;
