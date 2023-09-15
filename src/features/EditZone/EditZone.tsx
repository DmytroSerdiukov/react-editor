import React, { FC, useEffect } from "react";
import Box from "@mui/material/Box";
import { styles } from "./styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import EditItemContainer from "../../components/EditZone/EditItem/EditItemContainer";
import "./dragzone.css";
import { createNewItem } from "../../store/features/EditZoneReducer";

const EditZone: FC = (): JSX.Element => {
  const items = useAppSelector((state) => state.editzone.items);
  const dispatch = useAppDispatch();

  const handleDragEnter = () => {
    const dragzone: any = document.getElementById("dragzone");
    dragzone.classList.add("dragEnter");
  };

  const handleDragLeave = () => {
    const dragzone: any = document.getElementById("dragzone");
    dragzone.classList.remove("dragEnter");
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: any) => {
    const dragzone: any = document.getElementById("dragzone");
    const ToolType = e.dataTransfer.getData("text/plain");
    const item = ToolType.split(",");
    const newItem = { title: item[0], type: parseInt(item[1]) };
    dispatch(createNewItem(newItem));
    e.dataTransfer.clearData();
    dragzone.classList.remove("dragEnter");
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    const dragzone: any = document.getElementById("dragzone");
    dragzone.addEventListener("dragenter", handleDragEnter);
    dragzone.addEventListener("dragleave", handleDragLeave);
    dragzone.addEventListener("dragover", handleDragOver);
    dragzone.addEventListener("drop", handleDrop);
  }, []);

  return (
    <div id="dragzone" className={"wrapper"}>
      {items.map((el: any) => (
        <EditItemContainer key={el.id} {...el} />
      ))}
    </div>
  );
};

export default EditZone;
