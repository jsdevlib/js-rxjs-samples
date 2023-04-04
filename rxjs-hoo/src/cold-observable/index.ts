import { fromFetch } from 'rxjs/fetch';
import { switchMap, of, catchError } from 'rxjs';

const data$ = fromFetch('https://random-data-api.com/api/name/random_name').pipe(
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
);

export const Main = async () => {
  const s1 = data$.subscribe((s) => console.log(`Subscriber 1: ${JSON.stringify(s.name)}`));
  const s2 = data$.subscribe((s) => console.log(`Subscriber 2: ${JSON.stringify(s.name)}`));
  const s3 = data$.subscribe((s) => console.log(`Subscriber 3: ${JSON.stringify(s.name)}`));
};
