var randFromZeroToMax = function(params) { 
	//params[0] - max
	return Math.floor(Math.random() * params[0]); 
};

var randFromMinToMax = function(params) { 
	//params[0] - min
	//params[1] - max
	return Math.floor(Math.random() * (params[1] - params[0])) + params[0] ; 
};
 
var randByPoisson = function(params) {
	//params[0] - lambda
	let pn = 0.15;
	let n = Math.floor(params[0] / pn);
	let counter = 0;

	for (let i = 0; i < n; ++i) {
		if (Math.random() < pn) ++counter;
	}

	return counter;
}
