import { Subject } from 'rxjs';

export const Main = () => {
  const subject = new Subject<string>();

  subject.subscribe({
    next: (v) => console.log(`observerA: ${v}`),
  });

  subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`),
  });

  subject.next('Hello World');
};
