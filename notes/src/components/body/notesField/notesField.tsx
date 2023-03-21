import { useSelector } from "react-redux";
import { NoteType, Notes } from "../../../types";
import Stack from "@mui/material/Stack";
import "./notesField.scss";
import Note from "../note/Note";

const NotesField = () => {
  const notes = useSelector((state: Notes) => state.notes.value) as NoteType[];

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
