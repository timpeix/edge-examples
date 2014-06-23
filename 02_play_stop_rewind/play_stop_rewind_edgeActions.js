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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_sym_play}", "click", function(sym, e) {
         // Hier Code für Mausklick einfügen
         sym.getSymbol('sym_hello_world').play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym_stop}", "click", function(sym, e) {
         sym.getSymbol('sym_hello_world').playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym_rewind}", "click", function(sym, e) {
         sym.getSymbol('sym_hello_world').play(0);
         sym.getSymbol('sym_hello_world').stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym_remove}", "click", function(sym, e) {
         sym.getSymbol('sym_hello_world').$('rect_hello_world').hide();

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
   
   //Edge symbol: 'sym_rewind'
   (function(symbolName) {   
   
   })("sym_rewind");
   //Edge symbol end:'sym_rewind'

   //=========================================================
   
   //Edge symbol: 'sym_stop'
   (function(symbolName) {   
   
   })("sym_stop");
   //Edge symbol end:'sym_stop'

   //=========================================================
   
   //Edge symbol: 'sym_play'
   (function(symbolName) {   
   
   })("sym_play");
   //Edge symbol end:'sym_play'

   //=========================================================
   
   //Edge symbol: 'sym_hello_world'
   (function(symbolName) {   
   
   })("sym_hello_world");
   //Edge symbol end:'sym_hello_world'

})(jQuery, AdobeEdge, "EDGE-30797826");