import { Breakpoint } from '../types/breakpoint'

export interface State extends Breakpoint {
    callBackFunction: Function
}

export let state: State = {
    type: 'large',
    deviceType: 'pc',
    query: '(min-width: 1201px)',
    callBackFunction: () => {
        return
    }
}
