import { displayLog } from "./utils";
import { fromEvent } from "rxjs";
import {
  filter,
  first,
  last,
  map,
  skip,
  take,
  takeLast,
  takeWhile,
  tap,
} from "rxjs/operators";

export default () => {
  /** start coding */
  const grid = document.getElementById("grid");

  const click$ = fromEvent(grid, "click").pipe(
    //tap((val) => console.log(`before: ${val}`, val)),
    map((val) => [Math.floor(val.offsetX / 50), Math.floor(val.offsetY / 50)]),
    //filter((val) => (val[0] + val[1]) % 2 != 0),
    //tap((val) => console.log(`after: ${val}`, val)),
    //first((val) => (val[0] + val[1]) % 2 != 0)
    //take(2)
    // takeWhile(([col, row]) => col > 3),
    tap((val) => console.log(`cell: ${val}`, val)),
    // takeLast(3)
    skip(3)
  );

  const subscription = click$.subscribe((data) => displayLog(data));

  /** end coding */
};
