import React, { FC } from "react";
import List from "@mui/material/List";
import { listItems } from "./listItems";

const ToolBar: FC = (): JSX.Element => {
  return (
    <List
      component="nav"
      sx={{
        paddingLeft: 1,
        paddingRight: 1,
        marginTop: 3,
        width: 270,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {listItems}
    </List>
  );
};

export default ToolBar;
