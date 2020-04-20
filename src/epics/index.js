import { ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';

import { PING } from '../actions/actionTypes';
import { pong } from '../actions';

const pingEpic = action$ => action$.pipe(
    ofType(PING),
    delay(2000), // Asynchronously wait 1000ms then continue
    mapTo(pong())
);

export default pingEpic;