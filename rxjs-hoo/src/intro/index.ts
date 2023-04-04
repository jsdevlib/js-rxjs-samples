import { Observable } from 'rxjs';

export const observable$ = new Observable<string>((subscriber) => {
  subscriber.next('Alberto arroyo Raygada');
  setTimeout(() => subscriber.next('Johana Sunohara Rodriguez'), 2000);
  subscriber.next('Aitana Khalesee Arroyo Sunohara');
  setTimeout(() => subscriber.next('Flavia Emilia Arroyo Sunohara'), 2000);
});

observable$.subscribe({
  next: (value) => {
    console.log(`OBS1: for each next execution, return: ${value} with ${value.length}`);
  },
  error: (err) => console.error(err.message),
  complete: () => console.log('Stream finished'),
});

const observer1 = {
  next: (value) => {
    console.log(`OBS2: for each next execution, return: ${value} with ${value.length}`);
  },
  error: (err) => console.error(err.message),
  complete: () => console.log('Stream finished'),
};

const subscribe1 = observable$.subscribe(observer1);

subscribe1.unsubscribe();
