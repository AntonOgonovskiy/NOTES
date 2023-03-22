import { useSelector } from "react-redux";
import { Changing, Creating, Filter, NoteType } from "../../../types";
import "./notesField.scss";
import Note from "../note/Note";
import { useEffect } from "react";

const NotesField = () => {
  const notes = useSelector(
    (state: Filter) => state.filter.value
  ) as NoteType[];
  const isVisible = useSelector((state: Creating) => state.create.value);
  const isChange = useSelector((state: Changing) => state.change.value);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, isChange]);

  return (
    <div className="notesList">
      {notes.map((item: NoteType, index: number) => (
        <Note key={index} title={item.text} tags={item.tags} num={index} />
      ))}
    </div>
  );
};

export default NotesField;
