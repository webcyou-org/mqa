import { mqa } from '../models'
import { mediaQueryChangeEvent } from '../core'

export function addEvent(): void {
    console.log('addEvent')
    console.log(mqa.breakpointList)
    mqa.breakpointList.forEach(breakpoint => {
        window.matchMedia(breakpoint.query).addEventListener('change', mediaQueryChangeEvent)
    })
}
