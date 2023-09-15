import React, { FC } from "react";
import styles from "./ToolBar.module.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ToolBarItem from "../../components/ToolBar/Item/ToolBarItem";
import { createNewItem } from "../../store/features/EditZoneReducer";

const ToolBar: FC = (): JSX.Element => {
  const items = useAppSelector((state) => state.toolbar.items);
  const dispatch = useAppDispatch();
  const addEditItem = (item: any) => {
    dispatch(createNewItem(item));
  };
  return (
    <div className={styles.toolbar_wrapper}>
      <div className={styles.wrapper}>
        {items.map((el: any, i: number) => (
          <ToolBarItem key={`${el}${i}`} {...el} addEditItem={addEditItem} />
        ))}
      </div>
    </div>
  );
};

export default ToolBar;
