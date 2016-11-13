if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
		for ( var i = 0; i < arr.length; i++ ){
			if ( arr[i] == item ){
				return i;
			}
		}
		return -1;
    },

    sum : function(arr) {
		var sum = 0;
		for ( var i = 0; i < arr.length; i++ ){
			sum += arr[i];
		}
		return sum;
		
    },

    remove : function(arr, item) {
		var result = new Array();
		for ( var i = 0; i < arr.length; i++ ){
		    if ( arr[i] != item ){
				result[result.length] = arr[i];
			}
		}
		return result;

    },

    removeWithoutCopy : function(arr, item) {
	var count = 0;
	for ( var i = 0; i < arr.length; i++ ){
		    if ( arr[i] == item ){
				count++;
				for(var j = i; j < arr.length - 1; j++) {
					arr[j] = arr[j+1]; 
				}
				arr.length = arr.length-1;
				i--;
			}
		}
		return arr;
    },

    append : function(arr, item) {
		arr[arr.length] = item;
		return arr;

    },

    truncate : function(arr) {
		if(arr == null || arr.length == 0) return arr;
		arr.length = arr.length-1;
		return arr;
		
    },

    prepend : function(arr, item) {
		for (var i = arr.length - 1; i >=  0; i--) {
			if(i == 0) {
				arr[i+1] = arr[i];
				arr[i] = item;
			}
			else {
				arr[i+1] = arr[i];
			}
		}
		return arr;
    },

    curtail : function(arr) {
		for(var i = 1; i < arr.length; i++) {
			arr[i-1] = arr[i];
		}
		arr.length = arr.length-1;
		return arr;
    },

    concat : function(arr1, arr2) {
		var length = arr1.length;
		for(var i = 0; i < arr2.length; i++) {
			arr1[length+i] = arr2[i];
		}
		return arr1;
    },

    insert : function(arr, item, index) {
		for (var i = arr.length - 1; i >=  0; i--) {
			if(i == index) {
				arr[i+1] = arr[i];
				arr[i] = item;
				return arr;
			}
			else {
				arr[i+1] = arr[i];
			}
		}
		return arr;
    },

    count : function(arr, item) {
		var count = 0;
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] == item) {
				count++;
			}
		}
		return count;
    },

    duplicates : function(arr) {
		var result = new Array();
		var count = 0;
		for (var i = 0; i < arr.length; i++) {
			for (var j = i + 1 ; j < arr.length; j++) {
				if (arr[i] == arr[j]) {
					for(var k = 0; k < result.length; k++) {
						if(result[k] == arr[i]) {
							count++;
							break;
						}
					}
					if(count == 0) {
                   result[result.length] = arr[i];
				   
					}
					count = 0;
				}
			}
		}
		return result;
    },

    square : function(arr) {
		for(var i = 0; i < arr.length; i++) {
			var temp = arr[i];
			arr[i] = temp * temp;
		}
		return arr;
    },

    findAllOccurrences : function(arr, target) {
		var result = new Array();
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] == target) {
				result[result.length] = i;
			}
		}
		return result;
		

    }
  };
});
