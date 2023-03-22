import { TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Changing, ChangingData, NoteType, Notes } from "../../../types";

const ChangeModal = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state: Changing) => state.change.value);
  const data = useSelector((state: ChangingData) => state.changeData.value);
  const notes = useSelector((state: Notes) => state.notes.value) as NoteType[];
  const [note, setNote] = useState("");

  function closeModal() {
    updateNote(note);
    setNote("");
    dispatch({ type: "CHANGING", payload: false });
    dispatch({ type: "CHANGINGDATA", payload: "" });
  }

  function updateNote(value: string) {
    if (value.length < 1) return;
    const regexForTags = /#(\S+)/g;
    const text = value;
    const tags: string[] = [];
    value
      .split(" ")
      .forEach((item) => (item.match(regexForTags) ? tags.push(item) : ""));
    const body: NoteType = { text, tags };
    notes.splice(data.index, 1, body);
    dispatch({ type: "FILTEREDNOTES", payload: notes });
  }

  useEffect(() => {
    setNote(data.title);
  }, [isVisible, data]);

  return (
    <>
      {isVisible ? (
        <div className="noteModalWrapper">
          <div className="noteModalField">
            <TextField
              className="noteModalInput"
              variant="outlined"
              label="Whanna change something?"
              autoFocus
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <CheckIcon style={{ cursor: "pointer" }} onClick={closeModal} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ChangeModal;
