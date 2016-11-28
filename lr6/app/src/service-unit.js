function ServiceUnit(timePerRequest) {
	let self = this;
	
	self.queue = [];
	self.tpr = timePerRequest;

	let timeNewWork;

	self.getlengthQueue = function() {
		return self.queue.length;
	}

	self.check = function(nowTime) {
		if (self.queue.length == 0) return 0;

		let finished

		if (nowTime >= timeNewWork) {
			finished = self.queue.shift()
		}

		if (finished)  {
			timeNewWork = nowTime + self.queue[0] * self.tpr;
			return 1
		}

		return 0;
	}

	self.pushWork = function(nowTime, weight) {
		if (self.queue.length == 0) 
			timeNewWork = nowTime + weight * self.tpr;

		self.queue.push(weight)
	}
} 
