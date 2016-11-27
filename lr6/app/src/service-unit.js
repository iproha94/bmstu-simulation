function ServiceUnit(funcRandom, param) {
	let self = this;
	
	self.funcRandom = funcRandom;
	self.param = param;

	self.queue = [];

	let timeNewWork = self.funcRandom(self.param);

	self.getlengthQueue = function() {
		return self.queue.length;
	}

	self.check = function(nowTime) {
		let finished

		if (nowTime >= timeNewWork) {
			finished = self.queue.shift()
		}

		if (finished)  {
			timeNewWork = nowTime + self.funcRandom(self.param);
			return 1
		}

		return 0;
	}

	self.pushWork = function(nowTime, weight) {
		self.queue.push(weight)
		timeNewWork = nowTime + self.funcRandom(self.param);
	}
} 
