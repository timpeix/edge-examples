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
      
      
      Symbol.bindElementAction(compId, symbolName, "window", "orientationchange", function(sym, e) {
         console.log('change', syn, e);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "scroll", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "click", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         window.addEventListener('deviceorientation', function(event) {
           var alpha = event.alpha;
           var beta = event.beta;
           var gamma = event.gamma;
           // Do something
           console.log(event);
         }, false);
         
         window.addEventListener('devicemotion', function(event) {
          
           console.log(event);
         }, false);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'sym_quadrant'
   (function(symbolName) {   
   
   })("sym_quadrant");
   //Edge symbol end:'sym_quadrant'

   //=========================================================
   
   //Edge symbol: 'sym_alpha'
   (function(symbolName) {   
   
   })("sym_alpha");
   //Edge symbol end:'sym_alpha'

})(jQuery, AdobeEdge, "EDGE-48440269");