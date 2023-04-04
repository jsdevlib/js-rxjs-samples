import { Observable, Subject } from 'rxjs';

export class ObservableSubject<T> extends Observable<T> {
  protected _subject$ = new Subject<T>();

  constructor() {
    super();

    this.source = this._subject$;
  }

  public get subject$() {
    return this.subject$;
  }
}
