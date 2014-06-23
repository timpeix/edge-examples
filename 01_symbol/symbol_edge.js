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
                id: 'sym_remove',
                type: 'rect',
                rect: ['442', '336','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'sym_remove',
                symbolName: 'sym_remove'
            },
            {
                id: 'sym_hello_world',
                symbolName: 'sym_hello_world'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
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
                        id: 'txt_remove',
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
            "${_txt_remove}": [
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
                        id: 'txt_hello_world',
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
            "${_txt_hello_world}": [
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
            autoPlay: true,
            timeline: [
                { id: "eid2", tween: [ "style", "${_txt_hello_world}", "left", '55px', { fromValue: '55px'}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_txt_hello_world}", "left", '55px', { fromValue: '55px'}], position: 2998, duration: 0 },
                { id: "eid3", tween: [ "style", "${_rect_hello_world}", "left", '319px', { fromValue: '0px'}], position: 0, duration: 2998 }            ]
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
