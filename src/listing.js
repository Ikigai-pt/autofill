/*
 * @category JS
 * @package Form auto-completion tool
 * @copyright 2012 Dmitry Sheiko (http://dsheiko.com)
 * @license MIT
 */
(function( window ) {
  alert("loading auto script");
      fieldValueMap = {
           "Address" : "testing Daily",
	   "Unit": 3,
	   "City": "city",
	   "Postal Code": "ZZZZ",
	   "Region": "Banff"
      };

    Object.keys( fieldValueMap ).forEach(function( name ){

        var input =  document.querySelector( "form input[aria-label='"+ name+"']" );

        input && input.type !== "hidden" && ( input.value = fieldValueMap["'"+ name+ "'" ] );
    });

})( window );
