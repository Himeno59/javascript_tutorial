'use strict';

// example
function hello_world() {
    return alert("Hello, world!!");
};


// decorator

// caching result of function
function cachingDecorator(func) {
    let cache = new Map();
    
    return function(x) {
	let key = hash(arguments);
	if (cache.has(key)) {
	    return cache.get(key);
	}
	
	// let result = func.call(this, ...arguments);
	let result = func.apply(this, arguments);
	cache.set(x, result);
	return result
    };
}

function hash() {
    console.log([].join.call(arguments));
    return [].join.call(arguments);
}

