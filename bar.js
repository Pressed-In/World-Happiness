var ctx = document.getElementById("myBarChart").getContext('2d');

var allBackgroundColor = "rgb(114, 105, 204, 0.3)";

////////////// ALL THE DATA TO BE UPDATED //////////////////
var FirstCountryNamesToDisplay = ['New Zealand', 'Australia'];
var FirstNumbersToDisplay = [7.314, 7.284];

var AustraliaNewZealandNAMES = ['New Zealand', 'Australia'];
var AustraliaNewZealandNUMBERS = [7.314, 7.284];

var NorthAmericaNAMES = ['Canada', 'United States'];
var NorthAmericaNUMBERS = [7.316, 6.993];

var WesternEuropeNAMES = ['Norway', 'Denmark', 'Iceland', 'Switzerland', 'Finland', 'Netherlands', 'Sweden', 'Austria','Ireland', 'Germany', 'Belgium', 'Luxembourg', 'United Kingdom', 'Malta', 'France', 'Spain', 'Italy', 'North Cyprus','Cyprus', 'Greece', 'Portugal'];
var WesternEuropeNUMBERS = [7.537, 7.522, 7.504, 7.494, 7.469, 7.377, 7.284, 7.006, 6.977, 6.951, 6.891, 6.863, 6.714, 6.527, 6.442, 6.403, 5.964, 5.81, 5.621, 5.227, 5.195];

var LatinAmericaNAMES = ['Costa Rica', 'Chile', 'Brazil', 'Argentina', 'Mexico', 'Guatemala', 'Uruguay', 'Panama', 'Colombia', 'Trinidad and Tobago', 'Nicaragua', 'Ecuador', 'El Salvador', 'Belize', 'Bolivia', 'Peru', 'Paraguay', 'Jamaica', 'Venezuela', 'Dominican Republic', 'Honduras', 'Haiti'];
var LatinAmericaNUMBERS = [7.079, 6.652, 6.635, 6.599, 6.578, 6.454, 6.454, 6.452, 6.357, 6.168, 6.071, 6.008, 6.003, 5.956, 5.823, 5.715, 5.493, 5.311, 5.25, 5.23, 5.181, 3.603];

var EasternAsiaNAMES = ['Taiwan', 'Japan', 'South Korea', 'Hong Kong', 'China', 'Mongolia'];
var EasternAsiaNUMBERS = [6.422, 5.92, 5.838, 5.472, 5.273, 4.955];

var SoutheasternAsiaNAMES = ['Singapore', 'Thailand', 'Malaysia', 'Philippines', 'Indonesia', 'Vietnam', 'Myanmar', 'Cambodia'];
var SoutheasternAsiaNUMBERS = [6.572,6.424,6.084,5.43,5.262,5.074,4.545,4.168];

var CEENAMES = ['Czech Republic', 'Slovakia', 'Poland', 'Uzbekistan', 'Russia', 'Lithuania', 'Latvia', 'Moldova', 'Romania', 'Turkmenistan', 'Kazakhstan', 'Slovenia', 'Estonia', 'Belarus', 'Serbia', 'Hungary', 'Croatia', 'Kosovo', 'Montenegro', 'Azerbaijan', 'Bosnia and Herzegovina', 'Macedonia', 'Tajikistan', 'Kyrgyzstan', 'Bulgaria', 'Albania', 'Armenia', 'Georgia', 'Ukraine'];
var CEENUMBERS = [6.609, 6.098, 5.973, 5.971, 5.963, 5.902, 5.85, 5.838, 5.825, 5.822, 5.819, 5.758, 5.611, 5.569, 5.395, 5.324, 5.293, 5.279, 5.237, 5.234, 5.182, 5.175, 5.041, 5.004, 4.714, 4.644, 4.376, 4.286, 4.096];

var MiddleEastNAMES = ['Israel', 'United Arab Emirates', 'Qatar', 'Saudi Arabia', 'Kuwait', 'Bahrain', 'Algeria', 'Libya', 'Turkey', 'Jordan', 'Morocco', 'Lebanon', 'Tunisia', 'Palestinian Territories', 'Egypt', 'Iran', 'Iraq', 'Yemen', 'Syria'];
var MiddleEastNUMBERS = [7.213, 6.648, 6.375, 6.344, 6.105, 6.087, 5.872, 5.525, 5.5, 5.336, 5.235, 5.225, 4.805, 4.775, 4.735, 4.692, 4.497, 3.593, 3.462];

var SouthernAsiaNAMES = ['Pakistan', 'Bhutan', 'Nepal', 'Bangladesh', 'Sri Lanka', 'India', 'Afghanistan'];
var SouthernAsiaNUMBERS = [5.269,5.011,4.962,4.608,4.44,4.315,3.974];

var SSANAMES = ['Mauritius', 'Somalia', 'Nigeria', 'South Africa', 'Sierra Leone', 'Cameroon', 'Namibia', 'Kenya', 'Mozambique', 'Senegal', 'Zambia', 'Gabon', 'Ethiopia', 'Mauritania', 'Congo (Brazzaville)', 'Congo (Kinshasa)', 'Mali', 'Ivory Coast', 'Sudan', 'Ghana', 'Uganda', 'Burkina Faso', 'Niger', 'Malawi', 'Chad', 'Zimbabwe', 'Lesotho', 'Angola', 'Botswana', 'Benin', 'Madagascar', 'South Sudan', 'Liberia', 'Guinea', 'Togo', 'Rwanda', 'Tanzania', 'Burundi', 'Central African Republic'];
var SSANUMBERS = [5.629, 5.151, 5.074, 4.829, 4.709, 4.695, 4.574, 4.553, 4.55, 4.535, 4.514, 4.465, 4.46, 4.292, 4.291, 4.28, 4.19, 4.18, 4.139, 4.12, 4.081, 4.032, 4.028, 3.97, 3.936, 3.875, 3.808, 3.795, 3.766, 3.657, 3.644, 3.591, 3.533, 3.507, 3.495, 3.471, 3.349, 2.905, 2.693];



////////////// BAR CHART STUFF ////////////////////
var myBarChart = new Chart(ctx, {

  type: 'horizontalBar',

  data: {
    labels: FirstCountryNamesToDisplay,
    
    datasets: [
      { 
        data: FirstNumbersToDisplay,
        label: 'Australia and New Zealand',
        backgroundColor: "rgb(114, 105, 204, 0.3)",
        borderWidth: 0,
      }
    ]
  },

  options: {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        barThickness: 'flex',
        gridLines: {
          drawOnChartArea:false,
        },
        ticks: {
          /*fontSize: 10,*/
        },
      }],

      xAxes: [{
        barThickness: 'flex',
        gridLines: {
          drawOnChartArea:false,
        },
        ticks: {
          beginAtZero: true,
          max: 8,
        },
        scaleLabel: {
          display: true,
          labelString: 'Happiness Score',
          fontSize: 16,
        },
      }],

    },
    tooltips: {
      displayColors: false,
    },

},


});


////////////////// UPDATES ON BUTTON CLICKS /////////////////


$("#Australia-and-New-Zealand").click(function() {
    myBarChart.data.labels = AustraliaNewZealandNAMES
    myBarChart.data.datasets[0].data = AustraliaNewZealandNUMBERS
    myBarChart.data.datasets[0].backgroundColor = allBackgroundColor
    myBarChart.data.datasets[0].label = "Australia and New Zealand"

    myBarChart.update();
});

$("#North-America").click(function() {
    myBarChart.data.labels = NorthAmericaNAMES
    myBarChart.data.datasets[0].data = NorthAmericaNUMBERS
    myBarChart.data.datasets[0].backgroundColor = allBackgroundColor
    myBarChart.data.datasets[0].label = "North America"

    myBarChart.update();
});



$("#Western-Europe").click(function() {
    myBarChart.data.labels = WesternEuropeNAMES
    myBarChart.data.datasets[0].data = WesternEuropeNUMBERS
    myBarChart.data.datasets[0].backgroundColor = allBackgroundColor
    myBarChart.data.datasets[0].label = "Western Europe"

    myBarChart.update();
});


$("#Latin-America").click(function() {
    myBarChart.data.labels = LatinAmericaNAMES
    myBarChart.data.datasets[0].data = LatinAmericaNUMBERS
    myBarChart.data.datasets[0].backgroundColor = allBackgroundColor
    myBarChart.data.datasets[0].label = "Latin America"

    myBarChart.update();
});


$("#Eastern-Asia").click(function() {
    myBarChart.data.labels = EasternAsiaNAMES
    myBarChart.data.datasets[0].data = EasternAsiaNUMBERS
    myBarChart.data.datasets[0].backgroundColor = allBackgroundColor
    myBarChart.data.datasets[0].label = "Eastern Asia"

    myBarChart.update();
});


$("#Southeastern-Asia").click(function() {
    myBarChart.data.labels = SoutheasternAsiaNAMES
    myBarChart.data.datasets[0].data = SoutheasternAsiaNUMBERS
    myBarChart.data.datasets[0].backgroundColor = allBackgroundColor
    myBarChart.data.datasets[0].label = "Southeastern Asia"

    myBarChart.update();
});


$("#Central-Eastern-Europe").click(function() {
    myBarChart.data.labels = CEENAMES
    myBarChart.data.datasets[0].data = CEENUMBERS
    myBarChart.data.datasets[0].backgroundColor = allBackgroundColor
    myBarChart.data.datasets[0].label = "Central Eastern Europe"

    myBarChart.update();
});


$("#Middle-East").click(function() {
    myBarChart.data.labels = MiddleEastNAMES
    myBarChart.data.datasets[0].data = MiddleEastNUMBERS
    myBarChart.data.datasets[0].backgroundColor = allBackgroundColor
    myBarChart.data.datasets[0].label = "Middle East"

    myBarChart.update();
});


$("#Southern-Asia").click(function() {
    myBarChart.data.labels = SouthernAsiaNAMES
    myBarChart.data.datasets[0].data = SouthernAsiaNUMBERS
    myBarChart.data.datasets[0].backgroundColor = allBackgroundColor
    myBarChart.data.datasets[0].label = "Southern Asia"

    myBarChart.update();
});


$("#Sub-Saharan-Africa").click(function() {
    myBarChart.data.labels = SSANAMES
    myBarChart.data.datasets[0].data = SSANUMBERS
    myBarChart.data.datasets[0].backgroundColor = allBackgroundColor
    myBarChart.data.datasets[0].label = "Sub-Saharan Africa"

    myBarChart.update();
});

