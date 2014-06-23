/***********************
* Adobe Edge Animate-Aktionen für Composition
*
* Bearbeiten Sie diese Datei mit Vorsicht. Achten Sie darauf, dass 
* Funktionssignaturen und Kommentare, die mit „Edge“ anfangen, beibehalten werden, 
* damit Sie mit diesen Aktionen weiterhin in Adobe Edge Animate interagieren können.
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // Aliase für häufig verwendete Edge-Klassen

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         yepnope(
         {
         nope:[
         'bower_components/shake.js/shake.js',
         'bower_components/greensock/src/uncompressed/TweenMax.js'
         ],
         complete: init
         }
         );
         //when yepnope has loaded everything execute init();
         function init (){
         
         }
         
         
         
         
         
         
         //function to call when shake occurs
         function shakeEventDidOccur () {
            // select a dom element 
         	var ele = sym.getSymbol('Symbol_1').getSymbolElement();
         	// do animation stuff
         	// totate by 30 degree and make it a bit smaller  
         	TweenLite.to(ele, 2, {
         		rotation:30, 
         		scaleX:0.8, 
         		onComplete: function() {
         			// when the animation is finished
         			TweenLite.to(ele, 4, {rotation:0, scaleX:2.0});
         		}
         	});
         
         
         }
         
         // shakeEventDidOccur();
         window.addEventListener('shake', shakeEventDidOccur, false);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(jQuery, AdobeEdge, "EDGE-1610104");