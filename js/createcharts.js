
// ---------------------------------------------------------
// Ad Performance Bar Chart
// ---------------------------------------------------------

var ctx = document.getElementById("ad-performance-chart");
var ad_perf_chart = new Chart(ctx, {
    type: 'bar',
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
            data: [125, 123, 165, 154, 232, 123],
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

// ---------------------------------------------------------
// Ad Performance Line Chart
// ---------------------------------------------------------

var ctx2 = document.getElementById("ad-performance-lines");

var ad_perf_lines = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
            {
                label: "Ad01",
                fill: false,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBorderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: "#fff",
                borderWidth: 2,
                pointBorderWidth: 3,
                pointHoverRadius: 4,
                pointHoverBackgroundColor: 'rgba(255,99,132,1)',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [185, 179, 184, 181, 169, 118, 118],
                spanGaps: false
            }, {
                label: "Ad02",
                fill: false,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: "#fff",
                borderWidth: 2,
                pointBorderWidth: 3,
                pointHoverRadius: 4,
                pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [194, 168, 154, 181, 179, 113, 112],
                spanGaps: false
            }, {
                label: "Ad03",
                fill: false,
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                pointBorderColor: 'rgba(255, 206, 86, 1)',
                pointBackgroundColor: "#fff",
                borderWidth: 2,
                pointBorderWidth: 3,
                pointHoverRadius: 4,
                pointHoverBackgroundColor: 'rgba(255, 206, 86, 1)',
                pointHoverBorderColor: 'rgba(255, 206, 86, 1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [273, 253, 257, 272, 262, 224, 223],
                spanGaps: false
            }, {
                label: "Ad04",
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                pointBorderColor: 'rgba(75, 192, 192, 1)',
                pointBackgroundColor: "#fff",
                borderWidth: 2,
                pointBorderWidth: 3,
                pointHoverRadius: 4,
                pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
                pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [256, 293, 274, 293, 252, 215, 215],
                spanGaps: false
            }, {
                label: "Ad05",
                fill: false,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                pointBorderColor: 'rgba(153, 102, 255, 1)',
                pointBackgroundColor: "#fff",
                borderWidth: 2,
                pointBorderWidth: 3,
                pointHoverRadius: 4,
                pointHoverBackgroundColor: 'rgba(153, 102, 255, 1)',
                pointHoverBorderColor: 'rgba(153, 102, 255, 1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [364, 356, 390, 379, 363, 351, 326],
                spanGaps: false
            }, {
                label: "Ad06",
                fill: false,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                pointBorderColor: 'rgba(255, 159, 64, 1)',
                pointBackgroundColor: "#fff",
                borderWidth: 2,
                pointBorderWidth: 3,
                pointHoverRadius: 4,
                pointHoverBackgroundColor: 'rgba(255, 159, 64, 1)',
                pointHoverBorderColor: 'rgba(255, 159, 64, 1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [398, 391, 354, 350, 367, 309, 316],
                spanGaps: false
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Ad Performance (Last 7 days)'
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display:true,
                    labelString:'Dates'
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
                scaleLabel: {
                    display:true,
                    labelString:'Count'
                }
            }]
        }
    }
});


// ---------------------------------------------------------
// Pie Charts - Male
// ---------------------------------------------------------

var ctx4 = document.getElementById("male-noimp-chart");
var male_imp_chart = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: [
            "Under 20",
            "20-30",
            "30-45",
            "45-60",
            "Over 60"
        ],
        datasets: [
            {
                data: [30, 250, 130, 300, 100, 300],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF"
                ]
            }]
    }, 
    options: {
        title: {
            display: true,
            text: 'Male - No Impressions'
        }
    }
});

var ctx5 = document.getElementById("male-imp-chart");
var male_imp_chart = new Chart(ctx5, {
    type: 'doughnut',
    data: {
        labels: [
            "Under 20",
            "20-30",
            "30-45",
            "45-60",
            "Over 60"
        ],
        datasets: [
            {
                data: [230, 450, 100, 290, 160, 240],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF"
                ]
            }]
    }, 
    options: {
        title: {
            display: true,
            text: 'Male - Impressions'
        }
    }
});

var ctx6 = document.getElementById("female-noimp-chart");
var male_imp_chart = new Chart(ctx6, {
    type: 'doughnut',
    data: {
        labels: [
            "Under 20",
            "20-30",
            "30-45",
            "45-60",
            "Over 60"
        ],
        datasets: [
            {
                data: [350, 150, 130, 120, 350, 200],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF"
                ]
            }]
    }, 
    options: {
        title: {
            display: true,
            text: 'Female - No Impressions'
        }
    }
});

var ctx7 = document.getElementById("female-imp-chart");
var male_imp_chart = new Chart(ctx7, {
    type: 'doughnut',
    data: {
        labels: [
            "Under 20",
            "20-30",
            "30-45",
            "45-60",
            "Over 60"
        ],
        datasets: [
            {
                data: [300, 50, 100, 200, 150, 200],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF"
                ]
            }]
    },
    options: {
        title: {
            display: true,
            text: 'Female - Impressions'
        }
    }
});


