import React from "react";
import List from "@mui/material/List";
import { listItems } from "./listItems";

const ToolBar = () => {
  return (
    <>
      <List component="nav">{listItems}</List>
    </>
  );
};

export default ToolBar;
