import { state, mqa } from '../models'

export function callback(fn: Function): void {
    state.callBackFunction = fn;

    mqa.breakpointList.forEach(breakpoint => {
        if (window.matchMedia(breakpoint.query).matches) {
            return fn(mqa.callbackState);
        }
    })
}
