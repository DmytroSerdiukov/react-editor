export type IItemProps = {
  id: number;
  title: string;
  value: string;
  changeItemVal: (data: any) => {};
  deleteItem: (id: any) => {};
  cloneItem: (data: any) => {};
};
