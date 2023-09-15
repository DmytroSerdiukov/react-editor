import React, { FC } from "react";

import { useAppDispatch } from "../../../store/hooks";
import {
  changeItemValue,
  cloneItem,
  deleteEditItem,
} from "../../../store/features/EditZoneReducer";

import EditItem from "./EditItem";

const EditItemContainer: FC = (props: any) => {
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

  return (
    <EditItem
      {...props}
      deleteItem={deleteItem}
      changeItemVal={changeItemVal}
      cloneItem={cloneEditItem}
    />
  );
};

export default EditItemContainer;
