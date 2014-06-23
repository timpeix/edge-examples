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
                id: 'Symbol_1',
                type: 'rect',
                rect: ['143', '112','auto','auto','auto', 'auto']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['167', '53','auto','auto','auto', 'auto'],
                text: "Shake it like its hot!<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'Symbol_1',
                symbolName: 'Symbol_1'
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
            "${_Text}": [
                ["style", "top", '21px'],
                ["style", "height", '28px'],
                ["style", "left", '172px'],
                ["style", "width", 'auto']
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
                { id: "eid9", tween: [ "style", "${_Text}", "left", '172px', { fromValue: '172px'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Text}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0 }            ]
        }
    }
},
"Symbol_1": {
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
                    rect: ['-58px', '10px', '264px', '175px', 'auto', 'auto'],
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
                ["style", "height", '175px'],
                ["style", "width", '264px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
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
                { id: "eid7", tween: [ "style", "${_Rectangle}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Rectangle}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-1610104");
