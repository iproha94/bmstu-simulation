include('src/source-of-information.js'); 
include('src/service-unit.js');
include('src/memory.js'); 
include('src/chart.js'); 

function findProbabilityOfFailure(simulator, lClient, lOperators, lStores) {
	let client = new SourceOfInformation(lClient.min, lClient.max);

	let operators = [];
	lOperators.forEach(function(el) {
		operators.push(new ServiceUnit(el.min, el.max));
	})

	let nowTime = 0;
	let amountRequest = 0;
	let amountLost = 0;

	while (amountRequest < simulator.amountRequest) {
		nowTime += simulator.dt;
		
		if (!client.isRequest(nowTime)) continue;

		let isServed = operators.some(operator => {
			if (operator.isFree(nowTime)) {
				operator.pushWork();
				client.reset();
				return true;
			}

			return false;
		})

		if (!isServed) {
			++amountLost;
			client.reset();
		}

		++amountRequest;
	}


	return amountLost / amountRequest;
}
