var ctx = document.getElementById('myChart3').getContext('2d');
				
				var chart = new Chart(ctx, {
				    // soort chart
				    type: 'pie',

				    // data voor dataset
				    data: {
				        labels: ["Sla", "Spinazie", "Wortels", "Tomaten", "Paprika"],
				        datasets: [{
				            label: "Stockdata in $",
				            backgroundColor: 'white',
				            borderColor: 'black',
				            data: [18, 26, 56, 47, 34],
				        }]
				    },

				    
				});