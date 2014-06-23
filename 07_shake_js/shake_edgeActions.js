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
         'bower_components/shake.js/shake.js'
         ],
         complete: init
         }
         );
         //when yepnope has loaded everything execute init();
         function init (){
         alert('loaded');
         
         //initialise your variables and Edge comp here
         }
         
         
         
         
         
         
         
         //function to call when shake occurs
         function shakeEventDidOccur () {
            alert('shake');
         	sym.$('Rectangle').hide();
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