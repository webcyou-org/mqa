import { addEvent } from './addEvent'
import { MQA, mqa } from '../models'

export function init(option: any): void {
    MQA.fromData(option);
    addEvent();
}
