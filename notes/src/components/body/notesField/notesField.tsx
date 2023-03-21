import { useSelector } from "react-redux";
import { Note, Notes } from "../../../types";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const NotesField = () => {
  const notes = useSelector((state: Notes) => state.notes.value) as Note[];
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Stack spacing={2}>
        {notes.map((item: Note, index: number) => (
          <Item key={index}>{item.text}</Item>
        ))}
      </Stack>
    </div>
  );
};

export default NotesField;
