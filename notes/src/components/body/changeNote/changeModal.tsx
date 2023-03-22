import { TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Changing, ChangingData, NoteType, Notes } from "../../../types";
import "./changeModal.scss";

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
  function deleteNote() {
    notes.splice(data.index, 1);
    dispatch({ type: "FILTEREDNOTES", payload: notes });
    dispatch({ type: "CHANGING", payload: false });
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
            <div className="noteModalManagement">
              <CheckIcon
                style={{ cursor: "pointer", marginBottom: "5px" }}
                onClick={closeModal}
              />
              <DeleteOutlineIcon
                style={{ cursor: "pointer" }}
                onClick={deleteNote}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ChangeModal;
