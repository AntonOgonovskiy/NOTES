import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "./note.scss";
import { useDispatch } from "react-redux";

const Note = (props: { title: string; tags: string[]; num: number }) => {
  const dispatch = useDispatch();

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
  }));

  const regex = /#+/g;
  const title = props.title.replaceAll(regex, " ");
  const tags = props.tags as string[];
  const data = { title: props.title, index: props.num };

  function openChangingNoteModal() {
    dispatch({ type: "CHANGING", payload: true });
    dispatch({ type: "CHANGINGDATA", payload: data });
  }

  return (
    <div className="noteWrapper" onClick={openChangingNoteModal}>
      <Item elevation={24}>{title}</Item>
      {tags.map((item, index) => (
        <span className="noteTag" key={index}>
          {`${item}  `}
        </span>
      ))}
    </div>
  );
};

export default Note;
