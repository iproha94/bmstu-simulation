function SourceOfInformation(timeReq, weightReq) {
	let self = this;
	
	self.timeReq = timeReq;
	self.weightReq = weightReq;

	let isRequest = false;

	let timeNewRequest = self.timeReq.randFunc(self.timeReq.param);
	
	let weightNewRequest = self.weightReq.randFunc(self.weightReq.param);

	self.isRequest = function(nowTime) {
		if (nowTime >= timeNewRequest && !isRequest)  {
			isRequest = true;
			timeNewRequest += self.timeReq.randFunc(self.timeReq.param);
			weightNewRequest = self.weightReq.randFunc(self.weightReq.param);
		}

		return isRequest;
	}

	self.getWeightReq = function() {
		return weightNewRequest;
	}

	self.reset = function() {
		isRequest = false;
	}
}
 
