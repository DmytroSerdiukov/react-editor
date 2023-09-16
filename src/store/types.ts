export enum ItemType {
  Headline,
  Paragraph,
  Image,
  Button,
}
export interface Item {
  id: number | string;
  title: string;
  type: ItemType;
  value: string;
}

export type ItemValues = Omit<Item, "title" | "type">;

export interface ItemData {
  title: string;
  type: number;
}
