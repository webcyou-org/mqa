import { addEvent } from './addEvent'
import { MQA, mqa } from '../models'

export function init(option: any): void {
    // console.log(option)
    console.log('init')
    // const mqa = new MQA(option);
    // console.log(MQA.instance)

    MQA.fromData(option);
    addEvent();

    console.log(mqa.breakpointList)
}
