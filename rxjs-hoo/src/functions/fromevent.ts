import { EventEmitter } from 'events';
import { fromEvent, Subject } from 'rxjs';
const eventEmitter = new EventEmitter();

class Product {
  constructor(readonly name: string, readonly price: number) {
    eventEmitter.emit('PRODUCT_CREATED', name, price);
  }
}

export const Main = () => {
  fromEvent(eventEmitter, 'PRODUCT_CREATED').subscribe((s) =>
    console.log(`Product ${s[0]} with price: ${s[1]} was created`),
  );

  const product = new Product('Apple', 0.3);
};
