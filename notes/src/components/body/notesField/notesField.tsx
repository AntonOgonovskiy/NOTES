import { useSelector } from "react-redux";
import { Creating, NoteType, Notes } from "../../../types";
import Stack from "@mui/material/Stack";
import "./notesField.scss";
import Note from "../note/Note";
import { useEffect } from "react";

const NotesField = () => {
  const notes = useSelector((state: Notes) => state.notes.value) as NoteType[];
  const isVisible = useSelector((state: Creating) => state.create.value);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <div className="notesList">
      <Stack spacing={2}>
        {notes.map((item: NoteType, index: number) => (
          <Note key={index} title={item.text} tags={item.tags} />
        ))}
      </Stack>
    </div>
  );
};

export default NotesField;
