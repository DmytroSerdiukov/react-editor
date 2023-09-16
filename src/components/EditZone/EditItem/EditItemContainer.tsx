import React, { FC } from "react";

import { useAppDispatch } from "../../../store/hooks";
import {
  changeItemValue,
  cloneItem,
  deleteEditItem,
  moveItemDown,
  moveItemUp,
} from "../../../store/features/EditZoneReducer";

import EditItem from "./EditItem";
import { EditItemData, EditItemInfo } from "../types";

const EditItemContainer: FC = (props: any): JSX.Element => {
  const dispatch = useAppDispatch();

  const changeItemVal = (data: EditItemInfo): void => {
    console.log(data);
    dispatch(changeItemValue(data));
  };

  const cloneEditItem = (data: EditItemData): void => {
    dispatch(cloneItem(data));
  };

  const deleteItem = (id: string): void => {
    dispatch(deleteEditItem(id));
  };

  const moveItemPositionUp = (id: string): void => {
    console.log(id);
    dispatch(moveItemUp(id));
  };

  const moveItemPositionDown = (id: string): void => {
    dispatch(moveItemDown(id));
  };

  return (
    <EditItem
      {...props}
      deleteItem={deleteItem}
      changeItemVal={changeItemVal}
      cloneItem={cloneEditItem}
      moveItemPositionUp={moveItemPositionUp}
      moveItemPositionDown={moveItemPositionDown}
    />
  );
};

export default EditItemContainer;
