import { mqa } from '../models'
import { mediaQueryChangeEvent } from '../core'

export function addEvent(): void {
    mqa.breakpointList.forEach(breakpoint => {
        window.matchMedia(breakpoint.query).addEventListener('change', mediaQueryChangeEvent)
    })
}
