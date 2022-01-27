import { addEvent } from './addEvent'
import { MQA } from '../models'

export function init(option: any): void {
    const mqa = new MQA(option);
    addEvent();
}
