import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Changing, Creating, Filter, Notes, NoteType } from "../../../../types";
import { Button } from "@mui/material";
import "./filterTags.scss";

const FilterTag = () => {
  const dispatch = useDispatch();
  const [filterValue, setFilter] = useState("#All");
  const isVisible1 = useSelector((state: Creating) => state.create.value);
  const isVisible2 = useSelector((state: Changing) => state.change.value);
  const noteList = useSelector(
    (state: Notes) => state.notes.value
  ) as NoteType[];
  const filterNotes = useSelector(
    (state: Filter) => state.filter.value
  ) as NoteType[];

  const tags = Array.from(
    new Set(
      noteList
        .map((item) => item.tags)
        .join(" ")
        .replaceAll(",", " ")
        .split(" ")
    )
  );

  // function selectAllTags(value: string) {
  //   const allNotes = Array.from(new Set([...noteList, ...filterNotes]));
  //   dispatch({ type: "FILTEREDNOTES", payload: allNotes });
  // }

  function filterByTag(value: string) {
    if (value === "#All") {
      const allNotes = Array.from(new Set([...noteList, ...filterNotes]));
      dispatch({ type: "FILTEREDNOTES", payload: allNotes });
    } else {
      let newArr: NoteType[] = [];
      for (let note of noteList) {
        if (note.tags.includes(value)) {
          newArr.push(note);
        }
      }
      dispatch({ type: "FILTEREDNOTES", payload: newArr });
    }
  }

  useEffect(() => {
    filterByTag(filterValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible1, isVisible2, filterValue]);

  return (
    <div className="tagsFilterWrapper">
      <Button onClick={() => setFilter("#All")} size="small">
        #All
      </Button>
      {tags.map((item, index) => (
        <Button
          key={index}
          size="small"
          variant="text"
          onClick={() => setFilter(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default FilterTag;
