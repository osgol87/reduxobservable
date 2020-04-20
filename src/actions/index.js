import { PING, PONG } from './actionTypes';

export const ping = () => ({ type: PING });
export const pong = () => ({ type: PONG });