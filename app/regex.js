if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
		var regex = /\d/g;
		return regex.test(str);
    },

    containsRepeatingLetter : function(str) {
		var regex = /([a-zA-Z]).*?\1/;
		return regex.test(str);
    },

    endsWithVowel : function(str) {
		var regex = /[aeiou]$/i;
		return regex.test(str);
    },

    captureThreeNumbers : function(str) {
		var regex = /\d{3}/;
		var check = regex.exec(str);
		return check ? check[0] : false;
    },

    matchesPattern : function(str) {
		var regex = /^\d{3}-\d{3}-\d{4}$/;
		return regex.test(str);

    },
    isUSD : function(str) {
		var regex = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
		return regex.test(str);

    }
  };
});
