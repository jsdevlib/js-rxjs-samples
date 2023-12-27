import { Observable } from 'rxjs'

export class Timer {
  private intervalId: NodeJS.Timeout
  private count: number

  stop(): void {
    clearInterval(this.intervalId)
  }

  start(): Observable<number> {
    return new Observable((observer) => {
      this.count = 0
      this.intervalId = setInterval(() => {
        observer.next(this.count++)
      }, 1000)
    })
  }
}

export class TimePrinter {
  private timer: Timer

  constructor(timer: Timer) {
    this.timer = timer
  }

  print(): void {
    const observable$ = this.timer.start()

    observable$.subscribe((value) => {
      console.log(value)
    })
  }
}
