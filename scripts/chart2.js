var ctx = document.getElementById('myChart2').getContext('2d');
				Chart.defaults.global.defaultFontColor = 'white';
				var chart = new Chart(ctx, {
				    // soort chart
				    type: 'line',

				    // data voor dataset
				    data: {
				        labels: ["Zondag", "Zaterdag", "Vrijdag", "Donderdag", "Woensdag", "Dinsdag", "Maandag"],
				        datasets: [{
				            label: "Water in Liters",
				            borderColor: 'white',
				            data: [312, 287, 254, 230, 213, 187, 154],
				        }]
				    },

				    
				});