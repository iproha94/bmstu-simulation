include('src/random.js');

function ServiceUnit(min, max) {
	let self = this;
	
	self.min = min;
	self.max = max;

	let isFree = false;
	
	let timeNewWork = randFromMinToMax(self.min, self.max);

	self.isFree = function(nowTime) {
		if (nowTime >= timeNewWork) isFree = true;

		return isFree;
	}

	self.pushWork = function(nowTime) {
		isFree = false;
		timeNewWork = nowTime + randFromMinToMax(self.min, self.max);
	}
} 
