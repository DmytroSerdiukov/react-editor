import React, { FC } from "react";
import { ICONS } from "./Icons";
import { IItemProps } from "./types";
import Paper from "@mui/material/Paper";

const Item: FC<IItemProps> = ({ title }): JSX.Element => {
  return (
    <Paper
      style={{
        width: 100,
        height: 80,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F6F9FE",
        padding: "15px 10px",
        borderRadius: 1,
        cursor: "pointer",
      }}
    >
      <div>{ICONS[title]}</div>

      <div style={{ color: "#252A32", fontSize: "12px", lineHeight: "18px" }}>
        {title}
      </div>
    </Paper>
  );
};

export default Item;
