import { useSelector } from "react-redux";
import { Creating, Filter, NoteType } from "../../../types";
import "./notesField.scss";
import Note from "../note/Note";
import { useEffect } from "react";

const NotesField = () => {
  const notes = useSelector(
    (state: Filter) => state.filter.value
  ) as NoteType[];
  const isVisible = useSelector((state: Creating) => state.create.value);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <div className="notesList">
      {notes.map((item: NoteType, index: number) => (
        <Note key={index} title={item.text} tags={item.tags} />
      ))}
    </div>
  );
};

export default NotesField;
