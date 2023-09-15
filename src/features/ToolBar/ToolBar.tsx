import React, { FC } from "react";
import { listItems } from "../../components/ToolBar/listItems";
import styles from "./ToolBar.module.css";

const ToolBar: FC = (): JSX.Element => {
  return (
    <div className={styles.toolbar_wrapper}>
      <div className={styles.wrapper}>{listItems}</div>
    </div>
  );
};

export default ToolBar;
