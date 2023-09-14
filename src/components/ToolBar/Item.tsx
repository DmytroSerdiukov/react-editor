import React, { FC } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ICONS } from "./Icons";
import { IItemProps } from "./types";

const Item: FC<IItemProps> = ({ title }): JSX.Element => {
  return (
    <ListItemButton
      sx={{
        width: 100,
        height: 80,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F6F9FE",
        margin: 1,
        paddingTop: 2,
        borderRadius: 1,
      }}
    >
      <ListItemIcon
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {ICONS[title]}
      </ListItemIcon>
      <ListItemText
        primary={title}
        primaryTypographyProps={{ fontSize: "12px", lineHeight: "18px" }}
        sx={{ color: "#252A32" }}
      />
    </ListItemButton>
  );
};

export default Item;
