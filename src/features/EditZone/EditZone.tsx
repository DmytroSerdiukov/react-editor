import React, { FC, useEffect } from "react";
import { Item } from "../../store/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { createNewItem } from "../../store/features/EditZoneReducer";
import EditItemContainer from "../../components/EditZone/EditItem/EditItemContainer";
import "./dragzone.css";

const EditZone: FC = (): JSX.Element => {
  const items = useAppSelector((state) => state.editzone.items);
  const dispatch = useAppDispatch();
  function handleDragEnter() {
    const dragzone: any = document.getElementById("dragzone");
    dragzone.classList.add("dragEnter");
  }

  const handleDragLeave = () => {
    const dragzone: any = document.getElementById("dragzone");
    dragzone.classList.remove("dragEnter");
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: any) => {
    console.log(e.target.value);
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
      {items.length > 0 ? (
        items.map((el: Item) => <EditItemContainer key={el.id} {...el} />)
      ) : (
        <div className={"msg"}>You don't create any element yet</div>
      )}
    </div>
  );
};

export default EditZone;
