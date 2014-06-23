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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_sym_remove}", "click", function(sym, e) {
         // sym.getSymbol('sym_hello_world').$('rect_hello_world').hide();
         sym.getSymbol('sym_hello_world').stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'sym_remove'
   (function(symbolName) {   
   
   })("sym_remove");
   //Edge symbol end:'sym_remove'

   //=========================================================
   
   //Edge symbol: 'sym_hello_world'
   (function(symbolName) {   
   
   })("sym_hello_world");
   //Edge symbol end:'sym_hello_world'

})(jQuery, AdobeEdge, "EDGE-30797826");