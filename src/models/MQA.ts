import { BREAKPOINT_LIST } from '../utils/const'
import { Breakpoint } from '../types/breakpoint'
import { state } from './state'

export class MQA {
    private static _instance: MQA = null;
    breakpointList: Breakpoint[] = BREAKPOINT_LIST;

    constructor(option?: any) {
        if (MQA._instance) {
            console.log('_instance 返却')
            return MQA._instance;
        } else {
            MQA._instance = this;
        }
        if (option) {
            this.setBreakpointList(Array.isArray(option) ? option : [option]);
        }
        this.check();
    }

    check(): void {
        this.breakpointList.forEach(breakpoint => {
            if (window.matchMedia(breakpoint.query).matches) {
                state.type = breakpoint.type
                state.deviceType = breakpoint.deviceType
                state.query = breakpoint.query
            }
        })
    }

    static getInstance(): MQA {
        return MQA._instance;
    }

    setBreakpointList(breakpointList: Breakpoint[]): void {
        this.breakpointList = breakpointList;
        state.type = breakpointList[0].type;
        state.deviceType = breakpointList[0].deviceType;
        state.query = breakpointList[0].query;
    }

    isMatch(context: string): boolean {
        return state.type === context || state.deviceType === context || state.query === context;
    }

    isType(type: string): boolean {
        return state.type === type;
    }

    isDeviceType(deviceType: string): boolean {
        return state.deviceType === deviceType;
    }

    isQuery(query: string): boolean {
        return state.query === query;
    }
}

export const mqa = new MQA();
