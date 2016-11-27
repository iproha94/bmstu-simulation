include('src/loader.js'); 


function drawChart(idChart, amountLine, data1) {
    google.charts.load("current", {packages:["corechart"]});
    
    google.charts.setOnLoadCallback(function() {
    	var data = new google.visualization.DataTable();
		data.addColumn('number', 'X');

		for (let i = 0; i < amountLine; ++i) {
			data.addColumn('number', '');
		}

		data.addRows(data1);

        var options = {
        	hAxis: {title: 'X - время'},
			vAxis: {title: 'значение'},
        };

        let chart = new google.visualization.LineChart(document.getElementById(idChart));

        chart.draw(data, options);
    });
}
