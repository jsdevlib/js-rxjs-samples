import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Order } from '../emitters/impl/order';
import { fromFetch } from 'rxjs/fetch';

const selected$ = new Observable((s) => s.next('name'));

const fetchOrderDetail$ = selected$.pipe(
  map((value) =>
    fromFetch(`https://random-data-api.com/api/${value}/random_${value}`).pipe(
      map((response) => {
        // When we have Higher order operators, we shouldn use First Operator like Map, use SwitchMap, concatMap, etc.
        if (response.ok) {
          // OK return data
          return response.json();
        } else {
          // Server is returning a status requiring the client to try something else.
          return of({ error: true, message: `Error ${response.status}` });
        }
      }),
    ),
  ),
);

// We should not do this
export const Main = () => fetchOrderDetail$.subscribe((order$) => order$.subscribe((s) => console.log(s)));
