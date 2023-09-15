import React, { FC, MouseEvent, useState } from "react";
import IconButton from "@mui/material/IconButton";

import { ICONS } from "../ToolBar/Icons";
import { TextField } from "@mui/material";
import { IItemProps } from "./types";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ActionsContainer from "./ActionsContainer";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const EditItem: FC<IItemProps> = ({ title = "Headline" }): JSX.Element => {
  const [isEdited, setEdited] = useState(false);

  const onClickHandler = (e: any) => {
    e.stopPropagation();
    setEdited(!isEdited);
  };

  return (
    <div
      onClick={onClickHandler}
      style={{
        position: "relative",
        width: "100%",
        marginTop: 3,
        backgroundColor: isEdited ? "#D9E7FF" : "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 8,
      }}
    >
      {isEdited ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            right: 15,
            top: -27,
            gap: 5,
          }}
        >
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {ICONS[title]}
        </div>
        <div style={{ color: "#252A32", fontSize: "12px", lineHeight: "18px" }}>
          {title}
        </div>
      </div>
      {isEdited ? (
        <div
          style={{
            width: "95%",
            height: 40,
            padding: 5,
            marginBottom: 20,
            borderRadius: 3,
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            onClick={(e: MouseEvent<HTMLElement>) => {
              e.stopPropagation();
            }}
            sx={{ width: "100%" }}
            InputProps={{ style: { height: 30, fontSize: 11 } }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default EditItem;
