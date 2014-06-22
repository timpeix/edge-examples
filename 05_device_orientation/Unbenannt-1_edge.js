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
                id: 'sym_quadrant',
                type: 'rect',
                rect: ['77', '66','auto','auto','auto', 'auto']
            },
            {
                id: 'sym_alpha',
                type: 'rect',
                rect: ['84', '329','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'sym_alpha',
                symbolName: 'sym_alpha'
            },
            {
                id: 'sym_quadrant',
                symbolName: 'sym_quadrant'
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
            ],
            "${_sym_quadrant}": [
                ["style", "top", '24px']
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
                { id: "eid1", tween: [ "style", "${_sym_quadrant}", "top", '24px', { fromValue: '24px'}], position: 0, duration: 0 }            ]
        }
    }
},
"sym_quadrant": {
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
                    rect: ['0px', '0px', '396px', '268px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '268px'],
                ["style", "width", '396px']
            ],
            "${_Rectangle}": [
                ["style", "height", '268px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '396px']
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
"sym_alpha": {
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
                    rect: ['0px', '0px', '136px', '58px', 'auto', 'auto'],
                    id: 'rect_alpha',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    rect: ['8px', '15px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'txt_label',
                    text: 'Alpha',
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['101px', '15px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', '400', 'none', 'normal'],
                    id: 'txt_digit',
                    text: '0',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_txt_digit}": [
                ["style", "top", '15px'],
                ["style", "left", '101px']
            ],
            "${symbolSelector}": [
                ["style", "height", '58px'],
                ["style", "width", '136px']
            ],
            "${_txt_label}": [
                ["style", "left", '8px'],
                ["style", "top", '15px']
            ],
            "${_rect_alpha}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-48440269");
