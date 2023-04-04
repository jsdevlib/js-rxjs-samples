import { Observable, Subscriber, of, from } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

export class Product implements IProduct {
  constructor(readonly name: string, readonly quantity: number) {}
}
