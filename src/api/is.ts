import { mqa } from '../models'

// const mqa = MQA.instance;

export function isMatch(context: string): boolean {
    return mqa.isMatch(context);
}

export function isType(type: string): boolean {
    return mqa.isType(type);
}

export function isDeviceType(deviceType: string): boolean {
    return mqa.isDeviceType(deviceType);
}

export function isQuery(query: string): boolean {
    return mqa.isQuery(query);
}
