import { displayLog } from '../utils';
import { interval } from 'rxjs';

export default () =>{
    /** example code here */

    const observable = interval(1000);
    const subscription = observable.subscribe(x => displayLog(x));
    setTimeout(()=> { subscription.unsubscribe() }, 4000);
    //output: 0, 1, 2, 3

    /** end of example code  */
};

