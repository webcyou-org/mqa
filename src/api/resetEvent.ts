import { mqa } from '../models'
import { mediaQueryChangeEvent } from '../core'

export function resetEvent(): void {
    mqa.breakpointList.forEach(breakpoint => {
        window.matchMedia(breakpoint.query).removeEventListener('change', mediaQueryChangeEvent);
    })
}
