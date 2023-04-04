import { from } from 'rxjs';

const myFamily = ['Beto', 'Johana', 'Sergio', 'Aitana', 'Flavia'];

const myPromise = new Promise((resolve, reject) => {
  resolve('Resolved!');
  reject('Data is no valid!');
});

export const Main = () => {
  from(myFamily).subscribe((s) => console.log(s));

  from(myPromise).subscribe({
    next: (s) => console.log(s),
    complete: () => console.log('Completed'),
    error: (err) => console.log(err),
  });
};
