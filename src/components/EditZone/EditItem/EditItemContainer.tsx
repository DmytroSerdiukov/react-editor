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

const EditItemContainer: FC = (props: any): JSX.Element => {
  const dispatch = useAppDispatch();

  const changeItemVal = (data: any): void => {
    dispatch(changeItemValue(data));
  };

  const cloneEditItem = (data: any): void => {
    dispatch(cloneItem(data));
  };

  const deleteItem = (id: any): void => {
    dispatch(deleteEditItem(id));
  };

  const moveItemPositionUp = (id: any): void => {
    console.log(id);
    dispatch(moveItemUp(id));
  };

  const moveItemPositionDown = (id: any): void => {
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
