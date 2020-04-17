/*
 * @category JS
 * @package Form auto-completion tool
 * @copyright 2012 Dmitry Sheiko (http://dsheiko.com)
 * @license MIT
 */
(function( window ) {
  "use strict";
  var document = window.document,
      fieldValueMap = {
           "Address" : "testing Daily",
	   "Unit": 3,
	   "City": "city",
	   "Postal Code": "TTTT",
	   "Region": "Candada"
      };

    Object.keys( fieldValueMap ).forEach(function( name ){

        var input =  document.querySelector( "form input[aria-label='"+ name+"']" )
						|| document.querySelector( "form select[aria-label='"+ name+"']" )
            || document.querySelector( "form textarea[aria-label='"+ name+"']");

        input && input.type !== "hidden" && ( input.value = fieldValueMap[ name ] );
    });

})( window );
