import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "./note.scss";

const Note = (props: { title: string; tags: string[] }) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
  }));

  const regex = /#+/g;
  const title = props.title.replaceAll(regex, " ");
  const tags = props.tags as string[];

  return (
    <div>
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
