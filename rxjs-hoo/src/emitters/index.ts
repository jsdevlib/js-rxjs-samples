import { ORDER_EVENTS, Order } from './impl/order';
import { Product } from './impl/product';
import { Shop, SHOP_EVENTS } from './impl/shop';
import { IProduct } from './interfaces/product.interface';
import { Subject, fromEvent } from 'rxjs';

const banana = new Product('Banana', 3);

const printMessage = (value: any) => console.log(value);

export function Main() {
  const shop = new Shop();
  shop.on(SHOP_EVENTS.PRODUCT_ADD, (value) => printMessage(value));
  shop.on(SHOP_EVENTS.PRODUCT_REMOVED, (value) => printMessage(value));
  shop.on(SHOP_EVENTS.PRODUCT_REPOSITION, (value) => printMessage(value));
  shop.on(ORDER_EVENTS.NOTIFY, (value) => printMessage(value));

  shop.addProduct(banana, 3);

  const order = new Order();
  order.Buy(shop, banana, 1);
}
