include('src/source-of-information.js'); 
include('src/service-unit.js');
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

    let dataState = [];

    let needServed = simulator.amountRequest;

	while (amountRequest < needServed) {
		if (client.isRequest(nowTime)) {
			let isServed = operators.some(operator => {
				if (operator.isFree(nowTime)) {
					operator.pushWork(nowTime);
					client.reset();
					return true;
				}

				return false;
			})

			dataState.push([nowTime, isServed ? 0 : 1]);
			
			if (!isServed) {
				++amountLost;
				client.reset();

				if (!simulator.onInput) ++needServed;
			}
	
			++amountRequest;
		}

		
		
		nowTime += simulator.dt;
	}

    drawChart("chart1", 1, ['отказ'], dataState);

	return amountLost / amountRequest;
}
