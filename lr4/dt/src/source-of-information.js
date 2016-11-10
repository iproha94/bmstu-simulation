include('src/random.js'); 

function SourceOfInformation(a, b) {
	let self = this;
	
	self.a = a;
	self.b = b;

	self.isOrder = false;

	var lastIsOrder = false;


	let timeNewOrder = randFromMinToMax(self.a, self.b);

	self.isState = function() {
		return lastIsOrder ? 1 : 0
	}

	let getState = function(nowTime) {
		if (nowTime >= timeNewOrder) {
			self.isOrder = true;
			lastIsOrder = true;
			timeNewOrder += randFromMinToMax(self.a, self.b);
		} else {
			lastIsOrder = false;
		}

		return self.isOrder;
	}

	let getOrder = function(bm) {
		bm.push("что-то");
		self.isOrder = false;
	}

	self.run = function(nowTime, bm) {
		if (getState(nowTime)) getOrder(bm);
	}
}
 
