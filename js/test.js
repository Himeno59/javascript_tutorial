function spy(func) {
    let cashe = new Map();

    return function(x) {
	let key = hash(arguments);
	if (cache.has(key)) {
	    return cache.get(key);
	}
	
	let result = func.apply(this, arguments);
	cache.set(x, result);
	return result;
    };
}

