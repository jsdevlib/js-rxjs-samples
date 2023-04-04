import { of, Observable } from 'rxjs';

const fromArray$ = (): Observable<string[]> => {
  const array = ['Beto', 'Joha', 'Sergio', 'Aitana', 'Flavia'];

  return of(array);
};

export const Main = () => {
  fromArray$().subscribe({
    next: (s) => console.log(s),
    complete: () => console.log('Array was printed successfully'),
  });

  const data = ['demo1', 'demo2'];
  myOf(...data).subscribe({
    next: (s) => {
      s.forEach((item) => console.log(item));
    },
    complete: () => console.log('Printed!!!'),
  });
};

const myOf = (...arg: string[]): Observable<string[]> => {
  return new Observable((s) => {
    s.next(arg);
    s.complete();
  });
};
