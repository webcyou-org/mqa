(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.mqa = {}));
})(this, (function (exports) { 'use strict';

    let state = {
        type: 'large',
        deviceType: 'pc',
        query: '(min-width: 1201px)'
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
            if (MQA._instance) {
                console.log('_instance 返却');
                return MQA._instance;
            }
            else {
                MQA._instance = this;
            }
            if (option) {
                this.setBreakpointList(Array.isArray(option) ? option : [option]);
            }
            this.check();
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
        static getInstance() {
            return MQA._instance;
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
    const mqa = new MQA();

    function mediaQueryChangeEvent(event) {
        if (event.matches) {
            console.log('change');
        }
    }

    function addEvent() {
        mqa.breakpointList.forEach(breakpoint => {
            window.matchMedia(breakpoint.query).addEventListener('change', mediaQueryChangeEvent);
        });
    }

    function init(option) {
        new MQA(option);
        addEvent();
    }

    function getType() {
        return state.type;
    }

    function getState() {
        return state;
    }

    function resetEvent() {
        mqa.breakpointList.forEach(breakpoint => {
            window.matchMedia(breakpoint.query).removeEventListener('change', mediaQueryChangeEvent);
        });
    }

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

    exports.addEvent = addEvent;
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
