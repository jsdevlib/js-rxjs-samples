import { loadFiles$ } from 'observable-dir';

const files$ = loadFiles$('\\data');

files$.subscribe({
  next: (files) => console.log(files),
  error: (err) => console.error(err),
  complete: () => console.log('done'),
});
