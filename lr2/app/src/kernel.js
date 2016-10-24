function erfc(x) {
    // constants
    var a1 =  0.254829592;
    var a2 = -0.284496736;
    var a3 =  1.421413741;
    var a4 = -1.453152027;
    var a5 =  1.061405429;
    var p  =  0.3275911;

    // Save the sign of x
    var sign = 1;
    if (x < 0) {
        sign = -1;
    }
    x = Math.abs(x);

    // A&S formula 7.1.26
    var t = 1.0/(1.0 + p*x);
    var y = 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-x*x);

    return 1 - sign*y;
}

function frequencyBitwiseTest(str) {

	let s = 0;
	let n = str.length;

	for (let i = 0; i < n; ++i) {
		if (str[i] == "1")
			++s;
		else
			--s;
	}

	let sobs = Math.abs(s) / Math.sqrt(n);

	let p = erfc(sobs / Math.sqrt(2));

	return p;
}

function identicalConsecutiveBitstest(str) {
	let s = 0;
	let n = str.length;

	for (let i = 0; i < n; ++i)
		if (str[i] == "1")	
			++s;

	let pi = s / n;

	if (Math.abs(pi - 1/2) >= 2 / Math.sqrt(n)) return false;

	let v = 1;

	for (let i = 1; i < n; ++i)
		if (str[i] != str[i - 1])	
			++v;

	let p = erfc(Math.abs(v - 2 * n * pi * (1 - pi)) / (2 * pi * (1 - pi) * Math.sqrt(2 * n)));

	return p;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
