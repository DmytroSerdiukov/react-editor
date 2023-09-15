import React, { FC } from "react";
import { listItems } from "../../components/ToolBar/listItems";

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
