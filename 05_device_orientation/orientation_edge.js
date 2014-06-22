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
                id: 'txt_label',
                type: 'text',
                rect: ['0px', '372px','auto','auto','auto', 'auto'],
                text: "Acceleration",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'txt_x',
                type: 'text',
                rect: ['150px', '298px','auto','auto','auto', 'auto'],
                text: "X",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'txt_y',
                type: 'text',
                rect: ['150px', '337px','auto','auto','auto', 'auto'],
                text: "Y",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'txt_z',
                type: 'text',
                rect: ['150px', '372px','auto','auto','auto', 'auto'],
                text: "Z",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'txt_rotation',
                type: 'text',
                rect: ['0px', '245px','auto','auto','auto', 'auto'],
                text: "Rotation",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'txt_gamma',
                type: 'text',
                rect: ['150px', '245px','auto','auto','auto', 'auto'],
                text: "gamma",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'txt_beta',
                type: 'text',
                rect: ['150px', '172px','auto','auto','auto', 'auto'],
                text: "beta",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'txt_alpha',
                type: 'text',
                rect: ['150px', '210px','auto','auto','auto', 'auto'],
                text: "alpha",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'txt_do',
                type: 'text',
                rect: ['421px', '298px','auto','auto','auto', 'auto'],
                text: "Do what? ",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'sym_quadrant',
                type: 'rect',
                rect: ['92', '24','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'sym_quadrant',
                symbolName: 'sym_quadrant'
            }
            ]
        },
    states: {
        "Base State": {
            "${_txt_y}": [
                ["style", "top", '337px'],
                ["style", "left", '150px']
            ],
            "${_txt_alpha}": [
                ["style", "top", '210px'],
                ["style", "left", '150px']
            ],
            "${_txt_x}": [
                ["style", "top", '298px'],
                ["style", "left", '150px']
            ],
            "${_txt_z}": [
                ["style", "top", '372px'],
                ["style", "left", '150px']
            ],
            "${_txt_label}": [
                ["style", "left", '0px'],
                ["style", "top", '372px']
            ],
            "${_txt_beta}": [
                ["style", "top", '172px'],
                ["style", "left", '150px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '550px']
            ],
            "${_txt_gamma}": [
                ["style", "top", '245px'],
                ["style", "left", '150px']
            ],
            "${_txt_rotation}": [
                ["style", "left", '0px'],
                ["style", "top", '245px']
            ],
            "${_txt_do}": [
                ["style", "left", '421px'],
                ["style", "top", '298px']
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
            "${_rect_alpha}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_txt_label}": [
                ["style", "left", '8px'],
                ["style", "top", '15px']
            ],
            "${symbolSelector}": [
                ["style", "height", '58px'],
                ["style", "width", '136px']
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
                    rect: ['0px', '0px', '366px', '132px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '132px']
            ],
            "${symbolSelector}": [
                ["style", "height", '132px'],
                ["style", "width", '366px']
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
