import React, { FC, useState } from "react";
import Item from "../ToolBar/Item";
import ListItemIcon from "@mui/material/ListItemIcon";
import Container from "@mui/material/Container";

import ListItemText from "@mui/material/ListItemText";
import { ICONS } from "../ToolBar/Icons";
import { TextField } from "@mui/material";
type IItemProps = {
  title: string;
};

const EditItem: FC<IItemProps> = ({ title = "Headline" }): JSX.Element => {
  const [isEdited, setEdited] = useState(false);

  const onClickHandler = () => setEdited(!isEdited);

  return (
    <div
      style={{
        width: 475,
        marginTop: 3,
        backgroundColor: isEdited ? "#D9E7FF" : "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
        onClick={onClickHandler}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {ICONS[title]}
        </ListItemIcon>
        <ListItemText
          primary={title}
          primaryTypographyProps={{ fontSize: "12px", lineHeight: "18px" }}
          sx={{ color: "#252A32" }}
        />
      </div>
      {isEdited ? (
        <div
          style={{
            width: "95%",
            height: 40,
            paddingTop: 5,
            marginBottom: 20,
            borderRadius: 3,
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            sx={{ width: "97%" }}
            InputProps={{ style: { height: 30, fontSize: 11 } }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default EditItem;
