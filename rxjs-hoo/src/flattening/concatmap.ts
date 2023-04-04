import { Observable, catchError, concatMap, of, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

const source$ = new Observable<string>((subscriber) => {
  setTimeout(() => subscriber.next('A'), 1000);
  setTimeout(() => subscriber.next('B'), 3000);
  setTimeout(() => subscriber.complete(), 4000);
});

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

export const Main = () => {
  console.log('Application started');

  source$.pipe(concatMap((value) => data$)).subscribe({
    next: (value) => console.log(`My Name is: ${JSON.stringify(value.name)}`),
    complete: () => console.log('Application Finished'),
    error: (err) => console.log(err),
  });
};
