import React from "react";
import TextField from "@mui/material/TextField";
import { Name, Visible } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import "./askNameModal.scss";
import CheckIcon from "@mui/icons-material/Check";

const AskNameModal = () => {
  const isVisible = useSelector((state: Visible) => state.visibility.value);
  const name = useSelector((state: Name) => state.name.value);
  const dispatch = useDispatch();

  function closeModal() {
    dispatch({ type: "VISIBLE", payload: false });
  }
  function changeName(value: string) {
    dispatch({ type: "NAME", payload: value });
    localStorage.setItem("name", value);
  }
  return (
    <>
      {isVisible ? (
        <div className="nameModalWrapper">
          <TextField
            className="nameModalField"
            label="Enter your name"
            variant="outlined"
            autoFocus
            value={name}
            onChange={(e) => changeName(e.target.value)}
          />
          <CheckIcon style={{ cursor: "pointer" }} onClick={closeModal} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AskNameModal;
