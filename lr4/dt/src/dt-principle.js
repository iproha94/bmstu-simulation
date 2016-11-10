include('src/source-of-information.js'); 
include('src/service-unit.js');
include('src/memory.js'); 
include('src/chart.js'); 

function findMinLengthQueue(dt, a, b, lambda, finishTime, releaseOrder) {
	let bmLength = 0;
	let flagRun = true;

	while (flagRun) {
		++bmLength;

		try {
			let si = new SourceOfInformation(a, b);
			let su = new ServiceUnitByPoisson(releaseOrder, lambda);

			let bm = new Memory(bmLength);

			let nowTime = 0;
			let blocks = [si, su];

			while (nowTime < finishTime) {
				blocks.forEach(block => {
					block.run(nowTime, bm);
				})

				nowTime += dt;
			}
		} catch (err) {
			flagRun = !flagRun;
		} finally {
			flagRun = !flagRun;
		}
	}

	return bmLength;
}

function runAndDraw(dt, a, b, lambda, finishTime, releaseOrder, bmLength) {
	let si = new SourceOfInformation(a, b);
	let su = new ServiceUnitByPoisson(releaseOrder, lambda);

    let dataLengthBM = [];
    let dataState = [];

	let bm = new Memory(bmLength);

	let nowTime = 0;
	let blocks = [si, su];

	while (nowTime < finishTime) {
		dataLengthBM.push([nowTime, bm.length()]);
		dataState.push([nowTime, blocks[0].isState(), blocks[1].isState(), ]);

		blocks.forEach(block => {
			block.run(nowTime, bm);
		})

		nowTime += dt;
	}

    drawChart("chart1", 1, ['число элементов в буферной памяти'], dataLengthBM);
    
    drawChart("chart2", 2, ['состояние ИИ', 'состояние ОА'], dataState);
}
