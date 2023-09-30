import { IProduct } from './IProduct';

export class CartItem {
  constructor(public product: IProduct, public count: number = 1) {}
  //   private _totalPrice: number = 0;
  get totalPrice(): number {
    return this.product.price * this.count;
  }
}
