import { Observable } from 'rxjs';

const interval$ = new Observable<number>((s) => {
  let counter = 1;

  const id = setInterval(() => {
    console.log('Emitted:', counter);
    s.next(counter++);
  }, 1000);

  return () => {
    clearInterval(id);
  };
});

export const Main = () => {
  const s = interval$.subscribe({
    next: (v) => console.log(v),
  });

  setTimeout(() => {
    console.log('unsubscribe');
    s.unsubscribe();
  }, 5000);
};
