export interface EditItemProps {
  id: number;
  title: string;
  value: string;
  type: number;
  changeItemVal: (data: any) => {};
  deleteItem: (id: any) => {};
  cloneItem: (data: any) => {};
  moveItemPositionUp: (id: any) => {};
  moveItemPositionDown: (id: any) => {};
}

export interface EditItemData {
  id: string;
  title: string;
  type: number;
  value: string;
}

export type EditItemInfo = Omit<EditItemData, "title" | "type">;
