import React, { FC, MouseEvent, useState } from "react";
import IconButton from "@mui/material/IconButton";

import { ActionIcons } from "../../ActionIcons/ActionIcons";
import { TextField } from "@mui/material";
import { IItemProps } from "../types";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ActionsContainer from "../../ActionsContainer/ActionsContainer";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import styles from "./EditItem.module.css";

const EditItem: FC<IItemProps> = ({ title = "Headline" }): JSX.Element => {
  const [isEdited, setEdited] = useState(false);

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
            <IconButton
              size="small"
              onClick={(e: MouseEvent<HTMLElement>) => e.stopPropagation()}
            >
              <ContentCopyIcon sx={{ fontSize: 12, color: "#fff" }} />
            </IconButton>
            <IconButton
              size="small"
              onClick={(e: MouseEvent<HTMLElement>) => e.stopPropagation()}
            >
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
          <TextField
            onClick={(e: MouseEvent<HTMLElement>) => {
              e.stopPropagation();
            }}
            sx={{ width: "100%" }}
            InputProps={{
              style: { height: 30, fontSize: 11 },
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default EditItem;
