$(document).ready(function(){
	$.ajax({
			var month = ["January", "feb"];
			var price = ["0,", "1", "2"];

			var chartdata = {
				labels: month,
				datasets : [
					{
						label: 'Magic Link Usage Count',
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 0.6)",
            borderWidth: 1.3,
            pointBackgroundColor: "rgba(54, 162, 235, 1)",
						data: price
					}
				]
			};

      var options = {
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0)"
            }
          }],
          yAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0)"
            },
            ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, values) {
                return '$' + value;
              },
              stepSize: 1000
            },
            tickMarkLength: 10
          }]
        }
      };
			var ctx = document.getElementById("line-chart").getContext("2d");

			var myLineChart = new Chart(ctx, {
				type: 'line',
				data: chartdata,
        options: options
			});
		},
		error: function(data) {
			console.log(data);
		}
	});
});
