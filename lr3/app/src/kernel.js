function erfc(x) {
    // constants
    var a1 =  0.254829592;
    var a2 = -0.284496736;
    var a3 =  1.421413741;
    var a4 = -1.453152027;
    var a5 =  1.061405429;
    var p  =  0.3275911;

    // Save the sign of x
    var sign = 1;
    if (x < 0) {
        sign = -1;
    }
    x = Math.abs(x);

    // A&S formula 7.1.26
    var t = 1.0/(1.0 + p*x);
    var y = 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-x*x);

    return 1 - sign*y;
}

function factorial(n) 
{ 
	if (n <= 1) return 1; 
	return n*factorial(n-1); 
} 

function poissonPMF(x, lambda) {
    return Math.pow(Math.E, -lambda) * Math.pow(lambda, x) / factorial(x);
}

function poissonCDF(x, lambda) {
    let s = 0;
    for (let i = 0; i <= x; ++i) {
        s += poissonPMF(i, lambda);
    }

    return s;
}

function uniformPMF(x, a, b) {
	if (x < a || x > b) return 0;

	return 1 / (b - a);
}

function uniformCDF(x, a, b) {
	if (x < a) return 0;
	if (x > b) return 1;
	
	return (x - a) / (b - a);
}

function drawChart(title1, title2, data1) {
    google.charts.load('current', {'packages':['corechart', 'line']});
    
    google.charts.setOnLoadCallback(function() {
    	var data = new google.visualization.DataTable();
		data.addColumn('number', 'X');
		data.addColumn('number', title1);
		data.addColumn('number', title2);

		data.addRows(data1);

        var options = {
			hAxis: {
			  title: 'X'
			},
			vAxis: {
			  title: 'Y'
			},
			colors: ['#a52714', '#097138'],
			crosshair: {
			  color: '#000',
			  trigger: 'selection'
			}
		};
        // let options = {
        //   title: title,
        //   curveType: 'function',
        //   legend: { position: 'bottom' }
        // };

        let chart = new google.visualization.LineChart(document.getElementById('chart'));

        chart.draw(data, options);
    });
}

function showPoisson(n, lambda) {
    let data = [];

    // data.push(['x', 'функция вероятности', 'функция распределения']);

    for (let i = 0; i <= n; ++i) {
        data.push([i, poissonPMF(i, lambda), poissonCDF(i, lambda)]);
    }

    drawChart('функция вероятности', 'функция распределения', data);

	let tableData = document.getElementById("tbl");
    tableData.rows[0].cells[1].innerText = lambda;
    tableData.rows[1].cells[1].innerText = lambda;
}

function showUniform(a, b) {
    let data = [];

    // data.push(['x', 'плотность вероятности', 'функция распределения']);

    let offset = (b - a) / 3;
    for (let i = a - offset; i <= b + offset; i+=0.01) {
        data.push([i, uniformPMF(i, a, b), uniformCDF(i, a, b)]);
    }

    drawChart('функция плотности', 'функция распределения', data);

	let tableData = document.getElementById("tbl");
    tableData.rows[0].cells[1].innerText = (a + b) / 2;
    tableData.rows[1].cells[1].innerText = (b - a) * (b - a) / 12;
}