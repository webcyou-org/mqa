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
        console.log(this.breakpointList);
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
        console.log('change');
    }
}

function addEvent() {
    console.log('addEvent');
    console.log(mqa.breakpointList);
    mqa.breakpointList.forEach(breakpoint => {
        window.matchMedia(breakpoint.query).addEventListener('change', mediaQueryChangeEvent);
    });
}

function init(option) {
    // console.log(option)
    console.log('init');
    // const mqa = new MQA(option);
    // console.log(MQA.instance)
    MQA.fromData(option);
    addEvent();
    console.log(mqa.breakpointList);
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
    console.log('isMatch');
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

export { addEvent, getState, getType, init, isDeviceType, isMatch, isQuery, isType, resetEvent };
//# sourceMappingURL=mqa.es.js.map
