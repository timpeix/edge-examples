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
                id: 'moving',
                type: 'rect',
                rect: ['20', '260','auto','auto','auto', 'auto']
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['389px', '63px','91px','46px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['426', '86','auto','auto','auto', 'auto'],
                text: "stop",
                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", ""]
            }],
            symbolInstances: [
            {
                id: 'moving',
                symbolName: 'moving'
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
                ["style", "left", '412px'],
                ["style", "top", '72px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2045,
            autoPlay: false,
            timeline: [
                { id: "eid4", tween: [ "style", "${_Text}", "top", '72px', { fromValue: '72px'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "style", "${_Text}", "left", '412px', { fromValue: '412px'}], position: 0, duration: 0 }            ]
        }
    }
},
"moving": {
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
                    rect: ['0px', '0px', '155px', '46px', 'auto', 'auto'],
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
            "${_Rectangle}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '155px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2045,
            autoPlay: false,
            timeline: [
                { id: "eid1", tween: [ "style", "${_Rectangle}", "left", '324px', { fromValue: '0px'}], position: 0, duration: 2045 },
                { id: "eid2", tween: [ "style", "${_Rectangle}", "top", '-9px', { fromValue: '0px'}], position: 0, duration: 2045 }            ]
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
})(jQuery, AdobeEdge, "EDGE-99129181");
