/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'sym_hello_world',
                type: 'rect',
                rect: ['0', '136','auto','auto','auto', 'auto']
            },
            {
                id: 'sym_play',
                type: 'rect',
                rect: ['0', '336','auto','auto','auto', 'auto']
            },
            {
                id: 'sym_stop',
                type: 'rect',
                rect: ['123', '336','auto','auto','auto', 'auto']
            },
            {
                id: 'sym_rewind',
                type: 'rect',
                rect: ['248', '336','auto','auto','auto', 'auto']
            },
            {
                id: 'sym_remove',
                type: 'rect',
                rect: ['442', '336','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'sym_hello_world',
                symbolName: 'sym_hello_world'
            },
            {
                id: 'sym_rewind',
                symbolName: 'sym_rewind'
            },
            {
                id: 'sym_remove',
                symbolName: 'sym_remove'
            },
            {
                id: 'sym_stop',
                symbolName: 'sym_stop'
            },
            {
                id: 'sym_play',
                symbolName: 'sym_play'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '550px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2998,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"sym_remove": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '108px', '64px', 'auto', 'auto'],
                    id: 'rect_remove',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)'],
                    c: [
                    {
                        rect: ['15px', '23px', 'auto', 'auto', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                        id: 'Text4Copy',
                        text: 'Remove',
                        align: 'left',
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rect_remove}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '108px']
            ],
            "${symbolSelector}": [
                ["style", "height", '64px'],
                ["style", "width", '108px']
            ],
            "${_Text4Copy}": [
                ["style", "left", '15px'],
                ["style", "top", '23px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sym_rewind": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '108px', '64px', 'auto', 'auto'],
                    id: 'rect_rewind',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)'],
                    c: [
                    {
                        rect: ['15px', '23px', 'auto', 'auto', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                        id: 'Text4',
                        text: 'Rewind',
                        align: 'left',
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '64px'],
                ["style", "width", '108px']
            ],
            "${_rect_rewind}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '108px']
            ],
            "${_Text4}": [
                ["style", "left", '15px'],
                ["style", "top", '23px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sym_stop": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '108px', '64px', 'auto', 'auto'],
                    id: 'rect_stop',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)'],
                    c: [
                    {
                        rect: ['29px', '23px', 'auto', 'auto', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                        id: 'Text3',
                        text: 'Stop',
                        align: 'left',
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text3}": [
                ["style", "left", '29px'],
                ["style", "top", '23px']
            ],
            "${_rect_stop}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '108px']
            ],
            "${symbolSelector}": [
                ["style", "height", '64px'],
                ["style", "width", '108px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sym_play": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '108px', '64px', 'auto', 'auto'],
                    id: 'rect_play',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)'],
                    c: [
                    {
                        rect: ['31px', '23px', 'auto', 'auto', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                        id: 'Text2',
                        text: 'Play',
                        align: 'left',
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rect_play}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '108px']
            ],
            "${_Text2}": [
                ["style", "left", '31px'],
                ["style", "top", '23px']
            ],
            "${symbolSelector}": [
                ["style", "height", '64px'],
                ["style", "width", '108px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sym_hello_world": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '231px', '92px', 'auto', 'auto'],
                    id: 'rect_hello_world',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)'],
                    c: [
                    {
                        rect: ['55px', '32px', 'auto', 'auto', 'auto', 'auto'],
                        id: 'Text',
                        text: 'Hello World',
                        font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "left", '55px'],
                ["style", "top", '32px']
            ],
            "${_rect_hello_world}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '92px'],
                ["style", "width", '231px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2998,
            autoPlay: false,
            timeline: [
                { id: "eid3", tween: [ "style", "${_rect_hello_world}", "left", '319px', { fromValue: '0px'}], position: 0, duration: 2998 },
                { id: "eid2", tween: [ "style", "${_Text}", "left", '55px', { fromValue: '55px'}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Text}", "left", '55px', { fromValue: '55px'}], position: 2998, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-30797826");
