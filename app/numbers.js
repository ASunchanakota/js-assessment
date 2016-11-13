if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
	 return 1 & (num >> (bit - 1));
    },

    base10: function(str) {
	return parseInt(str, 2);
    },

    convertToBinary: function(num) {
		function byteString(n) {
			if (n < 0 || n > 255 || n % 1 !== 0) {
			throw new Error(n + " does not fit in a byte");
			}
			return ("000000000" + n.toString(2)).substr(-8)
		}
  
		return byteString(num);
    },

    multiply: function(a, b) {
		
		return parseFloat((a*b).toFixed(4));

    }
   }
 });

