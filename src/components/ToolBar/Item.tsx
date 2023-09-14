import React, { FC } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

type IItemProps = {
  title: string;
};

const Item: FC<IItemProps> = ({ title }): JSX.Element => {
  return (
    <ListItemButton>
      <ListItemIcon></ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  );
};

export default Item;
