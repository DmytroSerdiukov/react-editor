import React, { FC, useEffect } from "react";
import { ActionIcons } from "../../ActionIcons/ActionIcons";
import { IItemProps, NewItemData } from "../types";
import Paper from "@mui/material/Paper";
import toolbarItem from "./ToolBarItem.module.css";
import useDragAndDrop from "../../../hooks/DragAndDrop/DragAndDrop";

const ToolBarItem: FC<IItemProps> = ({
  id,
  title,
  type,
  addEditItem,
}): JSX.Element => {
  const dnd = useDragAndDrop(`toolbar_item${id}`);

  const addNewEditItem = (): void => {
    const data: NewItemData = { title, type };
    addEditItem(data);
  };

  const handleDragStart = (e: any): void => {
    const item: any = document.getElementById(`toolbar_item${id}`);
    item.style.opacity = "0.4";
    e.dataTransfer.effectAllowed = "move";
    const ToolType = `${title},${type}`;
    e.dataTransfer.setData("text/plain", ToolType);
  };

  const handleDragEnd = (e: any): void => {
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
      {...dnd}
      id={`toolbar_item${id}`}
      draggable="true"
      onClick={addNewEditItem}
    >
      <Paper className={toolbarItem.wrapper}>
        <div>{ActionIcons[title]}</div>

        <div className={toolbarItem.toolbar_item_title}>{title}</div>
      </Paper>
    </div>
  );
};

export default ToolBarItem;
