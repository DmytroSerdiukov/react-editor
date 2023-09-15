import React, { FC, useEffect } from "react";
import { ActionIcons } from "../../ActionIcons/ActionIcons";
import { IItemProps } from "../types";
import Paper from "@mui/material/Paper";
import toolbarItem from "./ToolBarItem.module.css";

const ToolBarItem: FC<IItemProps> = ({
  id,
  title,
  type,
  addEditItem,
}): JSX.Element => {
  const handleDragStart = (e: any) => {
    const item: any = document.getElementById(`toolbar_item${id}`);
    item.style.opacity = "0.4";

    e.dataTransfer.effectAllowed = "move";
    const ToolType = `${title},${type}`;
    e.dataTransfer.setData("text/plain", ToolType);
  };
  const handleDragEnd = (e: any) => {
    const item: any = document.getElementById(`toolbar_item${id}`);
    item.style.opacity = "1";
  };

  useEffect(() => {
    const item: any = document.getElementById(`toolbar_item${id}`);
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragend", handleDragEnd);
  }, []);

  return (
    <div
      id={`toolbar_item${id}`}
      draggable="true"
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
