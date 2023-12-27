import { TimePrinter, Timer } from './time'

export const Main = () => {
  const timer = new Timer()

  const timePrinter = new TimePrinter(timer)
  timePrinter.print()
}
