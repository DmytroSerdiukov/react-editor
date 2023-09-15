import React, { FC } from "react";
import List from "@mui/material/List";
import { listItems } from "./listItems";

const ToolBar: FC = (): JSX.Element => {
  return (
    <div style={{ padding: 30, width: 270 }}>
      <div style={{ gap: 10, display: "flex", flexWrap: "wrap" }}>
        {listItems}
      </div>
    </div>
  );
};

export default ToolBar;
