include('src/source-of-information.js'); 
include('src/service-unit.js');
include('src/chart.js');
include('src/random.js');

function simulate(simulator, aBuyer, cashier_fast, cashier) {
	let buyer = new SourceOfInformation(
		{
			randFunc: randByPoisson, 
			param: [aBuyer.lambda]
		}, 
		{
			randFunc: randFromMinToMax, 
			param: [aBuyer.min, aBuyer.max]
		}
	);
	console.log(buyer)

	let fastCashiers = []
	for (let i = 0; i < cashier_fast.amount; ++i) {
		fastCashiers.push(new ServiceUnit(cashier.timePerRequest));
	}
	console.log(fastCashiers)

	let cashiers = []
	for (let i = 0; i < cashier.amount; ++i) {
		cashiers.push(new ServiceUnit(cashier.timePerRequest));
	}
	console.log(cashiers)

	let nowTime = 0;
	let amountInput = 0;
	let amountOutput = 0;

    let dataStateFastCashiers = [];
    let dataStateCashiers = [];

	while (amountOutput < aBuyer.amount) {

		if (buyer.isRequest(nowTime)) {

			let numberCashier = 0;
			let pollCashiers;

			if (buyer.getWeightReq() <= cashier_fast.max_weight) {
				pollCashiers = fastCashiers;
			} else {
				pollCashiers = cashiers;
			}

			pollCashiers.forEach(function(item, i, arr) {
				if (item.getlengthQueue() < arr[numberCashier].getlengthQueue()) {
					numberCashier = i;
				}
			})
			pollCashiers[numberCashier].pushWork(nowTime, buyer.getWeightReq())

			
			buyer.reset();
	
			++amountInput;
		}


    	let nowStateFastCashiers = [];
		nowStateFastCashiers.push(nowTime);

		fastCashiers.forEach(function(el) {
			amountOutput += el.check(nowTime);
			nowStateFastCashiers.push(el.getlengthQueue());
		})

		dataStateFastCashiers.push(nowStateFastCashiers);


    	let nowStateCashiers = [];
		nowStateCashiers.push(nowTime);

		cashiers.forEach(function(el) {
			amountOutput += el.check(nowTime);
			nowStateCashiers.push(el.getlengthQueue());
		})
		
		dataStateCashiers.push(nowStateCashiers);


		nowTime += simulator.dt;
	}

    drawChart("chart1", cashier_fast.amount, dataStateFastCashiers);
    drawChart("chart2", cashier.amount, dataStateCashiers);

	return {
		allTime: nowTime,
		amountOutput: amountOutput,
		amountInput: amountInput,
	}
}
