import { Observable } from 'rxjs';

/* 
  COLD Observable: 
  It will be emitting streams always that exist at least one subscription
  listening.
*/
const myObservable = new Observable((observer) => {
  observer.next(Math.random()); // generamos un número aleatorio
});

export const Main = () => {
  // Subscripción 1
  myObservable.subscribe((data) => {
    console.log(data); // 0.799234057357979
  });

  // Subscripción 2
  myObservable.subscribe((data) => {
    console.log(data); //0.9293311109721503
  });
};
