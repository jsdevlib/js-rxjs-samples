import { Observable } from 'rxjs';

const observable1$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('1. First Value');
  subscriber.next('2. Second Value');
  setTimeout(() => {
    subscriber.next('3. Third value after 2 sec async');
    //subscriber.complete();
  }, 2000);

  setTimeout(() => subscriber.error('Throwing and exception...afert 3 sec'), 3000);

  return () => {
    console.log('Teardown execution');
  };
});

export const Main = () => {
  console.log('Before Observable executed');
  observable1$.subscribe({
    next: (value) => console.log(`Printing: "${value}" from next observable`),
    complete: () => console.log('Stream was completed'),
    error: (err) => console.error(err),
  });
};
