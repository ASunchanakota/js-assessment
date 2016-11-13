if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray: function(fn, arr){
		return fn.apply(null, arr);
	},

	speak: function(fn, obj){
		return fn.call(obj);
	},

	functionFunction: function(str){
		return function(arg){
		return str + ", " + arg;
		};
	},

	makeClosures : function(arr, fn){
		var result = new Array(arr.length);

    var closureFn = ( function(val) {
      return function(val) { 
	  return fn(val); 
	  }
    })();

    for (var i = 0; i < arr.length; i++) {
      result[i] = closureFn(arr[i]);
    }
    return result;
	},

	partial: function(fn, str1, str2){
		return function(str3){
			return fn.call(null, str1, str2, str3);
		};
	},

	useArguments: function(){
		var sum = 0;
		for(var i = 0; i < arguments.length; i++){ //arguments - keyword
		sum += arguments[i];
		}
		return sum;
	},

	callIt: function(fn){
	    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      fn.apply(null, args);
	},

	partialUsingArguments: function(fn){
	 var args = Array.prototype.slice.call(arguments, 1, arguments.length);
		return function(){
		 var args2 = args.concat(Array.prototype.slice.call(arguments));
		 return fn.apply(null, args2);
		};
	},

	curryIt: function(fn){
	 function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
		return function (currentArgument) {
			accumulatedArguments.push(currentArgument);
 
			var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;
 
			if (allArgumentsProvided) {
				return fn.apply(null, accumulatedArguments);
	        } else {
				return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
			}
			 
		};
	 }
	 return getArgumentAccumulator([], fn.length);
	}
  };
});
