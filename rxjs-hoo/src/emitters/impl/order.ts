import { EventEmitter } from 'events';

import { Product } from './product';
import { Shop } from './shop';

export const ORDER_EVENTS = {
  NOTIFY: 'NOTIFY',
};

export class Order extends EventEmitter {
  constructor() {
    super();
  }

  Buy(shop: Shop, product: Product, quantity: number) {
    shop.removeProduct(product, quantity);
    this.emit(ORDER_EVENTS.NOTIFY, `Product ${product.name} was ordered for: ${quantity} succesfully`);
  }
}
