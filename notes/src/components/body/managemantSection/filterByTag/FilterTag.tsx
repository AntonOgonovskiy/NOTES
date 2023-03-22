import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Changing, Creating, Notes, NoteType } from "../../../../types";
import { Button } from "@mui/material";
import "./filterTags.scss";

const FilterTag = () => {
  const dispatch = useDispatch();
  const isVisible1 = useSelector((state: Creating) => state.create.value);
  const isVisible2 = useSelector((state: Changing) => state.change.value);
  const noteList = useSelector(
    (state: Notes) => state.notes.value
  ) as NoteType[];

  const tags = noteList
    .map((item) => item.tags)
    .join(" ")
    .replaceAll(",", " ")
    .split(" ");

  function selectAllTags() {
    dispatch({ type: "FILTEREDNOTES", payload: noteList });
  }

  function filterByTag(value: string) {
    let newArr: NoteType[] = [];
    for (let note of noteList) {
      if (note.tags.includes(value)) {
        newArr.push(note);
      }
    }
    dispatch({ type: "FILTEREDNOTES", payload: newArr });
  }

  useEffect(() => {}, [isVisible1, isVisible2]);

  return (
    <div className="tagsFilterWrapper">
      <Button onClick={selectAllTags} size="small">
        #All
      </Button>
      {tags.map((item, index) => (
        <Button
          key={index}
          size="small"
          variant="text"
          onClick={() => filterByTag(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default FilterTag;
