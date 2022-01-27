import { Breakpoint } from '../types/breakpoint';
export declare class MQA {
    private static _instance;
    breakpointList: Breakpoint[];
    constructor(option?: any);
    check(): void;
    static getInstance(): MQA;
    setBreakpointList(breakpointList: Breakpoint[]): void;
    isMatch(context: string): boolean;
    isType(type: string): boolean;
    isDeviceType(deviceType: string): boolean;
    isQuery(query: string): boolean;
}
export declare const mqa: MQA;
