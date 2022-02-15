(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.mqa = {}));
})(this, (function (exports) { 'use strict';

    let state = {
        type: 'large',
        deviceType: 'pc',
        query: '(min-width: 1201px)',
        callBackFunction: () => {
            return;
        }
    };

    const BREAKPOINT_LIST = [
        {
            type: 'large',
            deviceType: 'pc',
            query: '(min-width: 1201px)'
        },
        {
            type: 'middle',
            deviceType: 'tab',
            query: '(max-width: 1200px) and (min-width: 769px)'
        },
        {
            type: 'small',
            deviceType: 'sp',
            query: '(max-width: 768px)'
        }
    ];

    class MQA {
        static _instance = null;
        breakpointList = BREAKPOINT_LIST;
        constructor(option) {
            if (!MQA._instance) {
                MQA._instance = this;
            }
            if (option) {
                this.setBreakpointList(Array.isArray(option) ? option : [option]);
            }
            this.check();
            return MQA._instance;
        }
        static fromData(option) {
            if (!this._instance) {
                this._instance = new MQA(option);
            }
            if (option) {
                this._instance.setBreakpointList(Array.isArray(option) ? option : [option]);
            }
            this._instance.check();
            return this._instance;
        }
        static get instance() {
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
            };
        }
        check() {
            this.breakpointList.forEach(breakpoint => {
                if (window.matchMedia(breakpoint.query).matches) {
                    state.type = breakpoint.type;
                    state.deviceType = breakpoint.deviceType;
                    state.query = breakpoint.query;
                }
            });
        }
        setBreakpointList(breakpointList) {
            this.breakpointList = breakpointList;
            state.type = breakpointList[0].type;
            state.deviceType = breakpointList[0].deviceType;
            state.query = breakpointList[0].query;
        }
        isMatch(context) {
            return state.type === context || state.deviceType === context || state.query === context;
        }
        isType(type) {
            return state.type === type;
        }
        isDeviceType(deviceType) {
            return state.deviceType === deviceType;
        }
        isQuery(query) {
            return state.query === query;
        }
    }
    const mqa = MQA.instance;

    function mediaQueryChangeEvent(event) {
        if (event.matches) {
            mqa.check();
            state.callBackFunction(mqa.callbackState);
        }
    }

    function addEvent() {
        mqa.breakpointList.forEach(breakpoint => {
            window.matchMedia(breakpoint.query).addEventListener('change', mediaQueryChangeEvent);
        });
    }

    function init(option) {
        MQA.fromData(option);
        addEvent();
    }

    function getType() {
        return state.type;
    }

    function getState() {
        return state;
    }

    // const mqa = MQA.instance;
    function resetEvent() {
        mqa.breakpointList.forEach(breakpoint => {
            window.matchMedia(breakpoint.query).removeEventListener('change', mediaQueryChangeEvent);
        });
    }

    // const mqa = MQA.instance;
    function isMatch(context) {
        return mqa.isMatch(context);
    }
    function isType(type) {
        return mqa.isType(type);
    }
    function isDeviceType(deviceType) {
        return mqa.isDeviceType(deviceType);
    }
    function isQuery(query) {
        return mqa.isQuery(query);
    }

    function callback(fn) {
        state.callBackFunction = fn;
        mqa.breakpointList.forEach(breakpoint => {
            if (window.matchMedia(breakpoint.query).matches) {
                return fn(mqa.callbackState);
            }
        });
    }

    exports.addEvent = addEvent;
    exports.callback = callback;
    exports.getState = getState;
    exports.getType = getType;
    exports.init = init;
    exports.isDeviceType = isDeviceType;
    exports.isMatch = isMatch;
    exports.isQuery = isQuery;
    exports.isType = isType;
    exports.resetEvent = resetEvent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=mqa.umd.js.map
