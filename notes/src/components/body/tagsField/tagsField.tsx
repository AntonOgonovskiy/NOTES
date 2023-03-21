import React from "react";
import { useSelector } from "react-redux";
import { Notes, NoteType } from "../../../types";

const TagsField = () => {
  const notes = useSelector((state: Notes) => state.notes.value) as NoteType[];
  const tags: String[] = [];
  notes.forEach((item) => tags.push(...item.tags));

  return <div></div>;
};

export default TagsField;
