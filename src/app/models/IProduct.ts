import { ICategory } from "./ICategory";

export interface IProduct {
  id: number;
  name: string;
  quantity: number;
  price: number;
  img: string;
  categoryId: number;
  discount: number;
  enable: boolean;
  // category: ICategory;
}
