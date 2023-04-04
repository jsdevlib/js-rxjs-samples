import { fromEvent } from 'rxjs';
import { SHOP_EVENTS, Shop } from '../emitters/impl/shop';
import { Product } from '../emitters/impl/product';
import { Order } from '../emitters/impl/order';
import { ORDER_EVENTS } from '../emitters/impl/order';

/**
 * HOT Observable: The Observable does not emit stream by himself, due to the events coming from
 * an outside source that is generating independent events. For instance: MouseClick Event using fromEvent.
 */

export const Main = () => {
  const shop = new Shop();
  const order = new Order();

  fromEvent(shop, SHOP_EVENTS.PRODUCT_ADD).subscribe((value) => console.log(value));
  fromEvent(order, ORDER_EVENTS.NOTIFY).subscribe((value) => console.log(value));

  const product = new Product('Banana', 10);

  // ONLY WITH Observables

  shop.addProduct(product, 1);

  order.Buy(shop, product, 1);
};
