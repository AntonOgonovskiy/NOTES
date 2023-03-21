import React from "react";
import Search from "./searchByTag/Search";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import "./management.scss";

const Management = () => {
  const dispatch = useDispatch();
  function openCreator() {
    dispatch({ type: "CREATING", payload: true });
  }
  return (
    <div className="managementWrapper">
      <Search />
      <Button
        className="managementAddButton"
        variant="contained"
        endIcon={<AddIcon />}
        onClick={openCreator}
      >
        Create Note
      </Button>
    </div>
  );
};

export default Management;
