import { BREAKPOINT_LIST } from '../utils/const'
import { Breakpoint } from '../types/breakpoint'
import { state } from './state'

export class MQA {
    private static _instance: MQA = null;
    breakpointList: Breakpoint[] = BREAKPOINT_LIST;

    private constructor(option?: any) {
        if (!MQA._instance) {
            MQA._instance = this;
        }
        if (option) {
            this.setBreakpointList(Array.isArray(option) ? option : [option]);
        }
        this.check();
        return MQA._instance;
    }

    static fromData(option?: any): MQA {
        if (!this._instance) {
            this._instance = new MQA(option);
        }
        if (option) {
            this._instance.setBreakpointList(Array.isArray(option) ? option : [option]);
        }
        this._instance.check();
        return this._instance;
    }

    static get instance(): MQA {
        if (!this._instance) {
            this._instance = new MQA();
        }
        return this._instance;
    }

    get callbackState() {
        return {
            type: state.type,
            deviceType: state.deviceType,
            query: state.query
        }
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

export const mqa = MQA.instance;
