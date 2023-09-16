import React, { FC, MouseEvent, useState, useEffect, useRef } from "react";
import IconButton from "@mui/material/IconButton";

import { ActionIcons } from "../../ActionIcons/ActionIcons";
import { TextField } from "@mui/material";
import { IItemProps } from "../types";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ActionsContainer from "../../ActionsContainer/ActionsContainer";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styles from "./EditItem.module.css";
import { styled } from "@mui/material/styles";
const EditItem: FC<IItemProps> = ({
  id,
  title,
  value,
  type,
  changeItemVal,
  deleteItem,
  cloneItem,
  moveItemPositionUp,
  moveItemPositionDown,
}): JSX.Element => {
  const [isEdited, setEdited] = useState(false);
  const textfield = useRef<any>("");

  const editItemValue = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    const value = textfield.current.value;
    const data = { id, value };
    changeItemVal(data);
  };

  const onFileLoad = (e: any) => {
    const value = e.target.files[0].name;
    const data = { id, value };
    changeItemVal(data);
  };

  const onInputFileClick = (e: any) => {
    e.stopPropagation();
  };

  const deleteEditItem = (e: MouseEvent<HTMLElement>) => {
    console.log("delete", id);
    e.stopPropagation();
    deleteItem(id);
  };

  const onDragEnter = () => {
    const item = document.getElementById(`${id}`);
    item?.classList.add("dragEnter");
  };

  const onDragLeave = () => {
    const item = document.getElementById(`${id}`);
    item?.classList.remove("dragEnter");
  };

  const cloneEditItem = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const data = { id, title, type, value };
    cloneItem(data);
  };

  const onClickHandler = (e: any) => {
    e.stopPropagation();
    setEdited(!isEdited);
  };

  const changeItemPositionUp = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    moveItemPositionUp(id);
  };

  const changeItemPositionDown = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    moveItemPositionDown(id);
  };

  return (
    <div
      onClick={onClickHandler}
      className={styles.wrapper}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      draggable={true}
      id={`${id}`}
      style={{
        backgroundColor: isEdited ? "#D9E7FF" : "#fff",
      }}
    >
      {isEdited ? (
        <div className={styles.actions_wrapper}>
          <ActionsContainer background="#449CF4">
            <IconButton size="small" onClick={changeItemPositionDown}>
              <ArrowDownwardIcon sx={{ fontSize: 12, color: "#fff" }} />
            </IconButton>
            <IconButton size="small" onClick={changeItemPositionUp}>
              <ArrowUpwardIcon sx={{ fontSize: 12, color: "#fff" }} />
            </IconButton>
          </ActionsContainer>
          <ActionsContainer background="#68C2E9">
            <IconButton size="small" onClick={cloneEditItem}>
              <ContentCopyIcon sx={{ fontSize: 12, color: "#fff" }} />
            </IconButton>
            <IconButton size="small" onClick={deleteEditItem}>
              <DeleteOutlineIcon sx={{ fontSize: 12, color: "#fff" }} />
            </IconButton>
          </ActionsContainer>
        </div>
      ) : null}
      <div className={styles.component_info_wrapper}>
        <div className={styles.component_icon}>{ActionIcons[title]}</div>
        <div className={styles.component_title}>{title}</div>
      </div>
      {isEdited ? (
        <div className={styles.textfield_wrapper}>
          {type === 2 ? (
            <input
              id="fileinput"
              type="file"
              onClick={onInputFileClick}
              onChange={onFileLoad}
            />
          ) : (
            <TextField
              onClick={(e: MouseEvent<HTMLElement>) => {
                e.stopPropagation();
              }}
              defaultValue={value}
              sx={{ width: "100%" }}
              onChange={editItemValue}
              inputRef={textfield}
              InputProps={{
                style: { height: 30, fontSize: 11 },
              }}
            />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default EditItem;
