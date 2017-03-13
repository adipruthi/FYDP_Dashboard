
// ---------------------------------------------------------
// Ad Performance Bar Chart
// ---------------------------------------------------------

var ctx = document.getElementById("ab-test");
var ad_perf_chart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["Ad01", "Ad02", "Ad03", "Ad04", "Ad05", "Ad06"],
        datasets: [{
            label: '# Detected without Impression',
            data: [1552, 1324, 1423, 1253, 1872, 1533],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        }, {
            label: '# Recorded Impressions',
            data: [-1552, -1324, -1423, -1253, -1872, -1533],
            backgroundColor:'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Impression Percentage by Ad'
        },
        scales: {
            xAxes: [{
                stacked: true,
                scaleLabel: {
                    display:true,
                    labelString:'Ad Title'
                },
                ticks: {
                    suggestedMin: -2000,
                    suggestedMax: 2000
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
                stacked: true,
                scaleLabel: {
                    display:true,
                    labelString:'Count'
                }
            }]
        }
    }
});

$("#toggle-button-ad-perf").click(function() {
    
    if (typeof(ad_perf_noimp_count)=="undefined") { //first time (to percent)
        console.log("Loop1");
        ad_perf_noimp_count = ad_perf_chart.data.datasets[0].data;
        ad_perf_imp_count = ad_perf_chart.data.datasets[1].data;
        len = ad_perf_imp_count.length;

        ad_perf_noimp_perc = Array.apply(null, Array(len)).map(Number.prototype.valueOf,0.0);
        ad_perf_imp_perc = Array.apply(null, Array(len)).map(Number.prototype.valueOf,0.0);

        for (i = 0; i < len; i++) {
            ad_perf_noimp_perc[i] = ad_perf_noimp_count[i]/(ad_perf_noimp_count[i]+ad_perf_imp_count[i]);
            ad_perf_noimp_perc[i] = ad_perf_noimp_perc[i].toFixed(3);
            ad_perf_imp_perc[i] = ad_perf_imp_count[i]/(ad_perf_noimp_count[i]+ad_perf_imp_count[i]);
            ad_perf_imp_perc[i] = ad_perf_imp_perc[i].toFixed(3);
        }

        ad_perf_chart.data.datasets[0].data = ad_perf_noimp_perc;
        ad_perf_chart.data.datasets[1].data = ad_perf_imp_perc;
        ad_perf_chart.options.scales.yAxes[0].scaleLabel.labelString = "Percent";

    } else if (ad_perf_chart.data.datasets[0].data[1]<1) { //its a percentage, but we want a number
        console.log("Loop2");
        ad_perf_chart.data.datasets[0].data = ad_perf_noimp_count;
        ad_perf_chart.data.datasets[1].data = ad_perf_imp_count;
        ad_perf_chart.options.scales.yAxes[0].scaleLabel.labelString = "Count";

    } else { //its a number and we want to go back to a percent
        console.log("Loop3");
        ad_perf_chart.data.datasets[0].data = ad_perf_noimp_perc;
        ad_perf_chart.data.datasets[1].data = ad_perf_imp_perc;
        ad_perf_chart.options.scales.yAxes[0].scaleLabel.labelString = "Percent";
    }

    ad_perf_chart.update();

});