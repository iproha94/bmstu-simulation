include('src/loader.js'); 

function drawChart(idChart, amountLine, title, data1) {
    google.charts.load('current', {'packages':['corechart', 'line']});
    
    google.charts.setOnLoadCallback(function() {
    	var data = new google.visualization.DataTable();
		data.addColumn('number', 'X');

		for (let i = 0; i < amountLine; ++i) {
			data.addColumn('number', title[i]);
		}

		data.addRows(data1);

        var options = {
			hAxis: {
			  title: 'X - номер события'
			},
			vAxis: {
			  title: 'значение'
			},
			colors: ['#a52714', '#097138', '#0000ff'],
			crosshair: {
			  color: '#000',
			  trigger: 'selection'
			}
		};

        let chart = new google.visualization.LineChart(document.getElementById(idChart));

        chart.draw(data, options);
    });
}
