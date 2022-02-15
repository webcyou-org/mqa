import { Breakpoint } from '../types/breakpoint';
export interface State extends Breakpoint {
    callBackFunction: Function;
}
export declare let state: State;
