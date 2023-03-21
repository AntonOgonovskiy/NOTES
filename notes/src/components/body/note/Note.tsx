import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Note = (props: { title: string; tags: String[] }) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.primary,
  }));

  const regex = /#+/g;
  const title = props.title.replaceAll(regex, " ");
  const tags = props.tags as String[];

  return (
    <div className="noteWrapper">
      <Item elevation={24}>{title}</Item>
      {tags.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
};

export default Note;
