import { Observable, of, map } from 'rxjs';
import * as fs from 'fs';

export const loadFiles$ = (dir: string): Observable<Array<string>> => {
  //  fs.readdirSync(__dirname + dir);

  return new Observable<Array<string>>((observer) => {
    fs.readdir(__dirname + dir, (err, files) => {
      if (err) {
        observer.error(err);
      } else {
        of(files)
          .pipe(
            map((files) => files.map((file) => __dirname + dir + '\\' + file)),
          )
          .subscribe(observer);
      }
      observer.complete();
    });
  });
};

const files$ = loadFiles$('\\data');

const subscriber = files$.subscribe({
  next: (files) => console.log(files),
  error: (err) => console.error(err),
  complete: () => console.log('done'),
});

setTimeout(() => {
  subscriber.unsubscribe();
}, 1000);
