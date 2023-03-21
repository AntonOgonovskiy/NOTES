import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Notes, NoteType } from "../../../../types";
import "./search.scss";

const Search = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: Notes) => state.notes.value) as NoteType[];
  const [searchString, setSearchString] = useState("");

  function filterNotes(value: string) {
    dispatch({ type: "NOTES", payload: notes });
    setSearchString(value);
    let newArr: NoteType[] = [];
    for (let note of notes) {
      if (note.tags.join(" ").includes(value)) {
        newArr.push(note);
      }
    }
    dispatch({ type: "NOTES", payload: newArr });
  }
  return (
    <TextField
      size="small"
      className="searchField"
      id="outlined-basic"
      label="Search"
      value={searchString}
      variant="outlined"
      onChange={(e) => filterNotes(e.target.value)}
    />
  );
};

export default Search;
