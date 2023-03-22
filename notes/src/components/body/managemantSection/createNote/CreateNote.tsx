import { TextField } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useDispatch, useSelector } from "react-redux";
import { Creating, NoteType, Notes } from "../../../../types";
import { useState } from "react";
import "./create.scss";

const CreateNote = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state: Creating) => state.create.value);
  const noteList = useSelector(
    (state: Notes) => state.notes.value
  ) as NoteType[];
  const [note, setNote] = useState("");

  function closeModal() {
    createNote(note);
    setNote("");
    dispatch({ type: "CREATING", payload: false });
  }
  function createNote(value: string) {
    if (value.length < 1) return;
    const regexForTags = /#(\S+)/g;
    const text = value;
    const tags: string[] = [];
    value
      .split(" ")
      .forEach((item) => (item.match(regexForTags) ? tags.push(item) : ""));
    const body: NoteType = { text, tags };
    noteList.push(body);
    dispatch({ type: "NOTES", payload: noteList });
  }

  return (
    <>
      {isVisible ? (
        <div className="noteModalWrapper">
          <div className="noteModalField">
            <TextField
              className="noteModalInput"
              variant="outlined"
              label="What do you want?"
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

export default CreateNote;
