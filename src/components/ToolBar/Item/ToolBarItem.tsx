import React, { FC } from "react";
import { ActionIcons } from "../../ActionIcons/ActionIcons";
import { IItemProps } from "../types";
import Paper from "@mui/material/Paper";
import toolbarItem from "./ToolBarItem.module.css";

const ToolBarItem: FC<IItemProps> = ({
  title,
  type,
  addEditItem,
}): JSX.Element => {
  return (
    <div
      onClick={() => {
        const data = { title, type };
        addEditItem(data);
      }}
    >
      <Paper className={toolbarItem.wrapper}>
        <div>{ActionIcons[title]}</div>

        <div className={toolbarItem.toolbar_item_title}>{title}</div>
      </Paper>
    </div>
  );
};

export default ToolBarItem;
