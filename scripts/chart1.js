var ctx = document.getElementById('myChart').getContext('2d');
				Chart.defaults.global.defaultFontColor = 'white';
				var chart = new Chart(ctx, {
				    // soort chart
				    type: 'bar',

				    // data voor dataset
				    data: {
				        labels: ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"],
				       		fontColor: 'black',
				        datasets: [{
				            label: "Brandstof in Liters",
				            backgroundColor: 'white',
				           

				            data: [74, 34, 102, 180, 216, 128, 45],
				        }]
				    },

				});