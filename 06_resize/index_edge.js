/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'adaptiveContainer',
            type:'rect',
            rect:['0px','0px','100%','768px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'dispText',
            type:'text',
            rect:['92px','47px','371px','48px','auto','auto'],
            text:"",
            align:"left",
            font:['Arial, Helvetica, sans-serif',18,"rgba(217,217,217,1.00)","normal","none","normal"]
         },
         {
            id:'orientText',
            type:'text',
            rect:['92px','71px','371px','48px','auto','auto'],
            text:"",
            align:"left",
            font:['Arial, Helvetica, sans-serif',18,"rgba(217,217,217,1.00)","normal","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_orientText}": [
            ["style", "top", '71px'],
            ["color", "color", 'rgba(217,217,217,1.00)'],
            ["style", "font-size", '18px'],
            ["style", "left", '92px'],
            ["style", "width", '370.66674804688px']
         ],
         "${_dispText}": [
            ["style", "top", '47px'],
            ["color", "color", 'rgba(217,217,217,1.00)'],
            ["style", "width", '370.66674804688px'],
            ["style", "left", '92px'],
            ["style", "font-size", '18px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '400px'],
            ["style", "max-width", '1200px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'visible'],
            ["style", "width", '100%']
         ],
         "${_adaptiveContainer}": [
            ["style", "height", '768px']
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
"layout768": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','768px','1024px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(194,95,95,1.00)']
   },
   {
      rect: ['91px','507px','auto','auto','auto','auto'],
      id: 'numText',
      text: '768',
      font: ['Arial, Helvetica, sans-serif',99,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   },
   {
      rect: ['91','327px','517px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',49,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'paraText',
      text: 'This is the symbol that is added when the stage is',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_paraText}": [
            ["style", "top", '327.32px'],
            ["style", "width", '517px'],
            ["style", "font-size", '49px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["style", "height", '1024px'],
            ["color", "background-color", 'rgba(194,95,95,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '768px']
         ],
         "${symbolSelector}": [
            ["style", "height", '1024px'],
            ["style", "width", '768px']
         ],
         "${_numText}": [
            ["style", "top", '507.32px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '91px'],
            ["style", "font-size", '99px']
         ],
         "${_TextCopy}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '134px'],
            ["style", "left", '100px'],
            ["style", "font-size", '99px']
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
"layout1024": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','1024px','768px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(143,95,194,1.00)']
   },
   {
      rect: ['91px','372px','auto','auto','auto','auto'],
      id: 'numText',
      text: '1024',
      font: ['Arial, Helvetica, sans-serif',99,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   },
   {
      rect: ['91','175px','517px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',49,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'paraText',
      text: 'This is the symbol that is added when the stage is',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_paraText}": [
            ["style", "top", '175.32px'],
            ["style", "font-size", '49px'],
            ["style", "width", '517px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["color", "background-color", 'rgba(143,95,194,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_numText}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '372px'],
            ["style", "left", '91px'],
            ["style", "font-size", '99px']
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


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-34537025");
