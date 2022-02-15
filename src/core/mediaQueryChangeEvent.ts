import { mqa, state } from '../models'

export function mediaQueryChangeEvent(event: any): void {
    if (event.matches) {
        mqa.check();
        state.callBackFunction(mqa.callbackState);
    }
}
