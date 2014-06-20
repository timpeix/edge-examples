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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_sym_track_1}", "click", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym_track_2}", "click", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sym_track_3}", "click", function(sym, e) {
         

      });
      //Edge binding end

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var adobesound=new Audio();    
         adobesound.src="assets_audio/01.mp3";
         var sym_track_1 = sym.getSymbol('sym_track_1');
         sym_track_1.setVariable('audio', adobesound);
         
         var adobesound=new Audio();    
         adobesound.src="assets_audio/02.mp3";
         var sym_track_2 = sym.getSymbol('sym_track_2');
         sym_track_2.setVariable('audio', adobesound);
         
         var adobesound=new Audio();    
         adobesound.src="assets_audio/03.mp3";
         var sym_track_3 = sym.getSymbol('sym_track_3');
         sym_track_3.setVariable('audio', adobesound);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'sym_track_1'
   (function(symbolName) {   
   
   })("sym_track_1");
   //Edge symbol end:'sym_track_1'

   //=========================================================
   
   //Edge symbol: 'sym_track_2'
   (function(symbolName) {   
   
   })("sym_track_2");
   //Edge symbol end:'sym_track_2'

   //=========================================================
   
   //Edge symbol: 'sym_track_3'
   (function(symbolName) {   
   
   })("sym_track_3");
   //Edge symbol end:'sym_track_3'

})(jQuery, AdobeEdge, "EDGE-32429824");