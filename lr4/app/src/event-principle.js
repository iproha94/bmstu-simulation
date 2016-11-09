include('src/source-of-information.js'); 
include('src/service-unit.js');
include('src/memory.js'); 
include('src/chart.js'); 

function initBlock(fel, blocks, finishTime) {
	for (let i = 0; i < blocks.length; ++i) {
		fel[i] = blocks[i].getNextTime();
	}

	fel[blocks.length] = finishTime;
}

function getNumberMin(arr) {
	if (arr.length < 1) {
		throw new Error("пустой массив");
	}

	let iMin = 0;

	for (let i = 1; i < arr.length; ++i) {
		if (arr[iMin] > arr[i]) iMin = i;
	}

	return iMin;
}


function findMinLengthQueue(a, b, lambda, finishTime, releaseOrder) {
	let si = new SourceOfInformation(a, b);
	let su = new ServiceUnitByPoisson(releaseOrder, lambda);

	let bmLength = 0;
	let flagRun = true;

	while (flagRun) {
		++bmLength;

		try {
			runSimulation(si, su, bmLength, finishTime);
		} catch (err) {
			flagRun = !flagRun;
		} finally {
			flagRun = !flagRun;
		}
	}

	return bmLength;
}

function runSimulation(si, su, bmLength, finishTime) {
	
	let bm = new Memory(bmLength);

	let fel = [];
	
	let blocks = [si, su];

	initBlock(fel, blocks, finishTime);


	while (true) {
		let iMin = getNumberMin(fel);

		if (iMin == blocks.length) {
			break;
		}

		blocks[iMin].run(bm);
		fel[iMin] += blocks[iMin].getNextTime()
	}
}

function runAndDraw(a, b, lambda, finishTime, releaseOrder, bmLength) {
	let si = new SourceOfInformation(a, b);
	let su = new ServiceUnitByPoisson(releaseOrder, lambda);

	let bm = new Memory(bmLength);

	let fel = [];
	
	let blocks = [si, su];

	initBlock(fel, blocks, finishTime);

    let dataLengthBM = [];
    let dataStateFEL = [];
    let numEvent = 0;


	while (true) {
		++numEvent;
		dataLengthBM.push([numEvent, bm.length()]);
		dataStateFEL.push([numEvent, fel[0], fel[1], fel[2]]);

		let iMin = getNumberMin(fel);

		if (iMin == blocks.length) {
			break;
		}

		blocks[iMin].run(bm);
		fel[iMin] += blocks[iMin].getNextTime()
	}

    drawChart("chart1", 1, ['число элементов в буферной памяти'], dataLengthBM);
    
    drawChart("chart2", 3, ['источник информации', 'обслуживающий аппарат', 'время окончания моделирования'], dataStateFEL);
}