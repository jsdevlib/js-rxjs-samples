import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';

const selected$ = new Observable((s) => s.next('name'));

const fetchOrderDetail$ = selected$.pipe(
  map((value) =>
    fromFetch(`https://random-data-api.com/api/${value}/random_${value}`).pipe(
      switchMap((response) => {
        if (response.ok) {
          // OK return data
          return response.json();
        } else {
          // Server is returning a status requiring the client to try something else.
          return of({ error: true, message: `Error ${response.status}` });
        }
      }),
      catchError((err) => {
        // Network or other error, handle appropriately
        console.error(err);
        return of({ error: true, message: err.message });
      }),
    ),
  ),
);
