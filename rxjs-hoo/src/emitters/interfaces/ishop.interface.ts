import { IProduct } from './product.interface';

export interface IShop {
  name: string;
  products: Array<IProduct>;
  addStock(product: IProduct, quantity: number): void;
  removeStock(product: IProduct, quantity: number): void;
}
