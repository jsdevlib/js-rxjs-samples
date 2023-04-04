import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface CartItem {
  id: number;
  price: number;
  name: string;
  quantity: number;
}

const cartItem$ = new Observable<CartItem>((subs) =>
  subs.next({
    id: 1,
    price: 10,
    name: 'Banana',
    quantity: 5,
  } as CartItem),
);

export const Main = () => {
  cartItem$
    .pipe(map((cartItem: CartItem) => ({ ...cartItem, total: cartItem.price * cartItem.quantity })))
    .subscribe((s) => console.log(s));
};
