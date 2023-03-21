import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import AskNameModal from "./components/nameModal/AskNameModal";

function App() {
  return (
    <div className="App">
      <AskNameModal />
      <Header />
    </div>
  );
}

export default App;
