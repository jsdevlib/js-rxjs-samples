import { Observable, interval, timer } from 'rxjs';

const timer$ = new Observable<number>((s) => {
  let i = 0;
  setTimeout(() => {
    console.log('Timeout!');
    s.next(i++);
  }, 2000);
});

const source = interval(1000);

export const Main = () => {
  let i = 0;
  timer(2000).subscribe((s) =>
    source.subscribe({
      next: (s) => {
        i++;
        console.log(`number: ${i}`);
      },
    }),
  );
};
