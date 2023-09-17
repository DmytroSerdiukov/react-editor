export type IItemProps = {
  title: string
  type: number
  id: number
  addEditItem: (item: any) => void
}

export interface NewItemData {
  title: string
  type: number
}
