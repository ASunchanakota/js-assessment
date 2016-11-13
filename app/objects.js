if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
		return fn.call(obj);
    },
	
    alterObjects : function(constructor, greeting) {
		constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
		var results = [];
		var keys = Object.keys(obj);
		for (var i = 0; i < keys.length; i++) {
			results.push(keys[i] + ': ' + obj[keys[i]]);
		}
		return results;
	}

    }
  });
