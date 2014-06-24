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
         // Load All-in-One
         yepnope({
         	load: "bower_components/greensock/src/uncompressed/TweenMax.js",
         	complete: function() {
         		
         	}
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "touchmove", function(sym, e) {
         event = e;
         var backLayer = sym.$('backLayer');
         console.log(backLayer);
         var bMouse = event.screenX / 7.7;
         TweenLite.to(backLayer, 1, { css:{left:'-' + bMouse + 'px'}, overwrite:true } );
         /*
         var mMouse = event.screenX / 2.5;
         TweenLite.to(middleLayer, 1, { css:{left:'-' + mMouse + 'px'}, overwrite:true } );
         var fMouse = event.screenX / 1.4;
         TweenLite.to(frontLayer, 1, { css:{left:'-' + fMouse + 'px'}, overwrite:true } );
         
         */

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-11251020");