///////////////// INITIAL DATA ///////////////////

var ThingToDisplay = [1.445060492, 1.529118538, 0.83032325, 0.607834756, 0.488852188, 0.342000216];
var chart_labels = ['Avg GDP/Capita', 'Avg Family', 'Avg Life Expectancy', 'Avg Freedom', 'Avg Generosity', 'Avg Trust in Government'];
var initial_label = ['Australia and New Zealand'];

var allBackgroundColor = "rgb(114, 105, 204, 0.3)";
var allBorderColor = "rgb(114, 105, 204, 0.1)";

//////////////////// CHART STUFF /////////////////////

var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
  
  type: 'radar',

  data: {
    labels: chart_labels,
    
    datasets: [
      { 
        data: ThingToDisplay,
        label: initial_label,
        borderColor: allBorderColor,
        backgroundColor: allBackgroundColor,
        borderWidth: 0,
        pointRadius: 0,
        pointHitRadius: 8,
      }
    ]
  },

  options: {
    legend: {
      display: false,
    },
    responsive: true,

    scale:{
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 1.6,
        backdropColor: '#e9eaea',
        backdropPaddingX: 0,
        backdropPaddingY: 0,
    },
      pointLabels: {
        display: true,
        fontSize: 10,
      }
  },

  tooltips: {
      callbacks: {
       label: function(tooltipItem, data) {
                    var label = data.datasets[tooltipItem.datasetIndex].label || '';

                    if (label) {
                        label += ': ';
                    }
                    label += Math.round(tooltipItem.yLabel * 1000) / 1000;
                    return label;
        }
      },
      displayColors: false,
    },

},


});

/////////////////// BUTTON/UPDATE STUFF //////////////////////////

$("#Australia-and-New-Zealand").click(function() {
    var data = myChart.data;
    var initial_label = "Australia and New Zealand";

    data.datasets[0].data = ThingToDisplay;
    //data.datasets[0].borderColor = "#7892c2";
    data.labels = chart_labels;
    data.datasets[0].label = initial_label;

    data.datasets[0].borderColor = allBorderColor;
    data.datasets[0].borderWidth = 0;
    data.datasets[0].backgroundColor = allBackgroundColor;
    data.datasets[0].pointRadius = 0;
    data.datasets[0].pointHitRadius = 8;

    myChart.update();
});

$("#North-America").click(function() {
    var ThingToDisplay = [1.51273185, 1.450634778, 0.80442214, 0.558420718, 0.414059252, 0.211505152];
    var data = myChart.data;
    var initial_label = "North America";

    data.datasets[0].data = ThingToDisplay;
    //data.datasets[0].borderColor = "#728ebe";
    data.labels = chart_labels;
    data.datasets[0].label = initial_label;

    data.datasets[0].borderColor = allBorderColor;
    data.datasets[0].borderWidth = 0;
    data.datasets[0].backgroundColor = allBackgroundColor;
    data.datasets[0].pointRadius = 0;
    data.datasets[0].pointHitRadius = 8;

    myChart.update();
});

$("#Western-Europe").click(function() {
    var ThingToDisplay = [1.457410863, 1.444945659, 0.824673471, 0.515125303, 0.303496723, 0.218999389];
    var data = myChart.data;
    var initial_label = "Western Europe";

    data.datasets[0].data = ThingToDisplay;
    //data.datasets[0].borderColor = "#6d8aba";
    data.labels = chart_labels;
    data.datasets[0].label = initial_label;

    data.datasets[0].borderColor = allBorderColor;
    data.datasets[0].borderWidth = 0;
    data.datasets[0].backgroundColor = allBackgroundColor;
    data.datasets[0].pointRadius = 0;
    data.datasets[0].pointHitRadius = 8;

    myChart.update();
});

$("#Latin-America").click(function() {
    var ThingToDisplay = [1.006980817, 1.290156086, 0.611009186, 0.449221691, 0.210696187, 0.087763778];
    var data = myChart.data;
    var initial_label = "Latin America";

    data.datasets[0].data = ThingToDisplay;
    //data.datasets[0].borderColor = "#6786b6";
    data.labels = chart_labels;
    data.datasets[0].label = initial_label;

    data.datasets[0].borderColor = allBorderColor;
    data.datasets[0].borderWidth = 0;
    data.datasets[0].backgroundColor = allBackgroundColor;
    data.datasets[0].pointRadius = 0;
    data.datasets[0].pointHitRadius = 8;

    myChart.update();
});

$("#Eastern-Asia").click(function() {
    var ThingToDisplay = [1.318716109, 1.310969532, 0.808322599, 0.41381902, 0.221224079, 0.106750493];
    var data = myChart.data;
    var initial_label = "Eastern Asia";

    data.datasets[0].data = ThingToDisplay;
    //data.datasets[0].borderColor = "#6282b2";
    data.labels = chart_labels;
    data.datasets[0].label = initial_label;

    data.datasets[0].borderColor = allBorderColor;
    data.datasets[0].borderWidth = 0;
    data.datasets[0].backgroundColor = allBackgroundColor;
    data.datasets[0].pointRadius = 0;
    data.datasets[0].pointHitRadius = 8;

    myChart.update();
});

$("#Southeastern-Asia").click(function() {
    var ThingToDisplay = [0.965252861, 1.249947593, 0.581918199, 0.534970984, 0.449860277, 0.127590706];
    var data = myChart.data;
    var initial_label = "Southeastern Asia";

    data.datasets[0].data = ThingToDisplay;
    //data.datasets[0].borderColor = "#5c7eae";
    data.labels = chart_labels;
    data.datasets[0].label = initial_label;

    data.datasets[0].borderColor = allBorderColor;
    data.datasets[0].borderWidth = 0;
    data.datasets[0].backgroundColor = allBackgroundColor;
    data.datasets[0].pointRadius = 0;
    data.datasets[0].pointHitRadius = 8;

    myChart.update();
});

$("#Central-Eastern-Europe").click(function() {
    var ThingToDisplay = [1.092051019, 1.282285417, 0.636089739, 0.346609158, 0.186116131, 0.07961975];
    var data = myChart.data;
    var initial_label = "Central Eastern Europe";

    data.datasets[0].data = ThingToDisplay;
    //data.datasets[0].borderColor = "#577aaa";
    data.labels = chart_labels;
    data.datasets[0].label = initial_label;

    data.datasets[0].borderColor = allBorderColor;
    data.datasets[0].borderWidth = 0;
    data.datasets[0].backgroundColor = allBackgroundColor;
    data.datasets[0].pointRadius = 0;
    data.datasets[0].pointHitRadius = 8;

    myChart.update();
});

$("#Middle-East").click(function() {
    var ThingToDisplay = [1.16853543, 1.095511355, 0.605980141, 0.363767803, 0.199172336, 0.149084294];
    var data = myChart.data;
    var initial_label = "Middle East";

    data.datasets[0].data = ThingToDisplay;
    //data.datasets[0].borderColor = "#5176a6";
    data.labels = chart_labels;
    data.datasets[0].label = initial_label;

    data.datasets[0].borderColor = allBorderColor;
    data.datasets[0].borderWidth = 0;
    data.datasets[0].backgroundColor = allBackgroundColor;
    data.datasets[0].pointRadius = 0;
    data.datasets[0].pointHitRadius = 8;

    myChart.update();
});

$("#Southern-Asia").click(function() {
    var ThingToDisplay = [0.697478814, 0.931874931, 0.456657731, 0.398970761, 0.341446438, 0.103065792];
    var data = myChart.data;
    var initial_label = "Southern Asia";

    data.datasets[0].data = ThingToDisplay;
    data.datasets[0].borderColor = "#4c72a2";
    data.labels = chart_labels;
    data.datasets[0].label = initial_label;

    data.datasets[0].borderColor = allBorderColor;
    data.datasets[0].borderWidth = 0;
    data.datasets[0].backgroundColor = allBackgroundColor;
    data.datasets[0].pointRadius = 0;
    data.datasets[0].pointHitRadius = 8;

    myChart.update();
});

$("#Sub-Saharan-Africa").click(function() {
    var ThingToDisplay = [0.501748886, 0.95391889, 0.224766029, 0.35410449, 0.229599333, 0.100578711];
    var data = myChart.data;
    var initial_label = "Sub-Saharan Africa";

    data.datasets[0].data = ThingToDisplay;
    //data.datasets[0].borderColor = "#476e9e";
    data.labels = chart_labels;
    data.datasets[0].label = initial_label;

    data.datasets[0].borderColor = allBorderColor;
    data.datasets[0].borderWidth = 0;
    data.datasets[0].backgroundColor = allBackgroundColor;
    data.datasets[0].pointRadius = 0;
    data.datasets[0].pointHitRadius = 8;

    myChart.update();
});
