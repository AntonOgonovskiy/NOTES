import React from "react";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { Name } from "../../types";

const Header = () => {
  const name = useSelector((state: Name) => state.name.value);
  const dispatch = useDispatch();

  function askName() {
    dispatch({ type: "VISIBLE", payload: true });
  }

  return (
    <div className="headerWrapper">
      <p># My Notes</p>
      <p style={{ cursor: "pointer" }} onClick={askName}>
        Hello, {name}
      </p>
    </div>
  );
};

export default Header;
