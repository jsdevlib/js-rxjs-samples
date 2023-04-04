import { Observable, catchError, forkJoin, of, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

const getData = (url: string) => {
  return fromFetch(url).pipe(
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
};

const name$ = getData('https://random-data-api.com/api/name/random_name');
const nation$ = getData('https://random-data-api.com/api/nation/random_nation');

export const Main = () => {
  forkJoin([name$, nation$]).subscribe(([dataName, dataNation]) => {
    console.log(`${dataName.first_name} is from ${dataNation.capital}`);
  });
};

const a$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.next('A');
    subscriber.complete();
  }, 5000);

  return () => {
    console.log('A teardown');
  };
});

const b$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.error('Failure!');
  }, 3000);

  return () => {
    console.log('B teardown');
  };
});

forkJoin([a$, b$]).subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log('Error:', err),
});
