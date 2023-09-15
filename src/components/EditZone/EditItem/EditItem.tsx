import React, { FC, MouseEvent, useState, useRef } from "react";
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
}): JSX.Element => {
  const [isEdited, setEdited] = useState(false);
  const textfield = useRef<any>("");
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const editItemValue = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    const value = textfield.current.value;
    const data = { id, value };
    changeItemVal(data);
  };

  const deleteEditItem = (e: MouseEvent<HTMLElement>) => {
    console.log("delete", id);
    e.stopPropagation();
    deleteItem(id);
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

  return (
    <div
      onClick={onClickHandler}
      className={styles.wrapper}
      style={{
        backgroundColor: isEdited ? "#D9E7FF" : "#fff",
      }}
    >
      {isEdited ? (
        <div className={styles.actions_wrapper}>
          <ActionsContainer background="#449CF4">
            <IconButton
              size="small"
              onClick={(e: MouseEvent<HTMLElement>) => e.stopPropagation()}
            >
              <ArrowDownwardIcon sx={{ fontSize: 12, color: "#fff" }} />
            </IconButton>
            <IconButton
              size="small"
              onClick={(e: MouseEvent<HTMLElement>) => e.stopPropagation()}
            >
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
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
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
