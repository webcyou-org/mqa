import { Breakpoint } from '../types/breakpoint';
export declare class MQA {
    private static _instance;
    breakpointList: Breakpoint[];
    private constructor();
    static fromData(option?: any): MQA;
    static get instance(): MQA;
    get callbackState(): {
        type: string;
        deviceType: string;
        query: string;
    };
    check(): void;
    setBreakpointList(breakpointList: Breakpoint[]): void;
    isMatch(context: string): boolean;
    isType(type: string): boolean;
    isDeviceType(deviceType: string): boolean;
    isQuery(query: string): boolean;
}
export declare const mqa: MQA;
