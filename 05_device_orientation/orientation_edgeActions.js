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
         
         yepnope({
           load: ["bower_components/greensock/src/uncompressed/TweenMax.js"],
           callback: {
             "TweenMax.js": function () {
               console.log("TweenMax loaded!");
             }
           }
         });
         
         window.addEventListener('devicemotion', function(event) {
         
         
         var ele = sym.getSymbol('sym_quadrant').$('Rectangle');
         
         
         
             e = event;
         
                         var x = event.accelerationIncludingGravity.x;
                         var y = event.accelerationIncludingGravity.y;
                         var z = event.accelerationIncludingGravity.z;
                         var r = event.rotationRate;
         
                         sym.$('txt_x').html(x);
                         sym.$('txt_y').html(y);
                         sym.$('txt_z').html(z);
         
         					 sym.$('txt_alpha').html(r.alpha);
                         sym.$('txt_beta').html(r.beta);
                         sym.$('txt_gamma').html(r.gamma);
         
         // TweenLite.to(ele, 0, {width:100+(Math.abs(r.beta)*10), height:200});
         
         
         TweenLite.to(ele, 2, {rotation:"2.25rad", skewX:"30deg"});
         
         
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'sym_alpha'
   (function(symbolName) {   
   
   })("sym_alpha");
   //Edge symbol end:'sym_alpha'

   //=========================================================
   
   //Edge symbol: 'sym_quadrant'
   (function(symbolName) {   
   
   })("sym_quadrant");
   //Edge symbol end:'sym_quadrant'

})(jQuery, AdobeEdge, "EDGE-48440269");