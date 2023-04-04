import EventEmitter = require('events');
import { Product } from './product';
import { reduce } from 'rxjs';

export const SHOP_EVENTS = {
  PRODUCT_ADD: 'SHOP_PRODUCT_ADD',
  PRODUCT_REMOVED: 'SHOP_PRODUCT_REMOVED',
  PRODUCT_REPOSITION: 'PRODUCT_REPOSITION',
};

export class Shop extends EventEmitter {
  private products: Map<string, number>;

  constructor() {
    super({
      captureRejections: true,
    });

    this.products = new Map<string, number>();
  }

  addProduct(product: Product, quantity: number) {
    let total = this.products.get(product.name);

    !total ? (total = quantity) : (total += quantity);

    this.products.set(product.name, total);

    this.emit(SHOP_EVENTS.PRODUCT_ADD, `Product ${product.name} added. Stock: ${total}`);
  }

  removeProduct(product: Product, quantity: number) {
    let total = this.products.get(product.name);

    if (total === 0) this.emit(SHOP_EVENTS.PRODUCT_REPOSITION, `product ${product.name} is out of stock`);

    total -= quantity;

    this.products.set(product.name, total);
    this.emit(SHOP_EVENTS.PRODUCT_REMOVED, `product ${product.name} removed. Stock: ${total}`);
  }
}
