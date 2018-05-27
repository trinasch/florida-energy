/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("mainNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* Chart for index.html with energy consumed and produced from 1960-2015*/
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Produced', 'Consumed'],
    ['1960', 35680, 57344],
    ['1961', 34417, 62705],
    ['1962', 35826, 71216],
    ['1963', 38613, 78258],
    ['1964', 39016, 87016],
    ['1965', 39916, 95878],
    ['1966', 42760, 108610],
    ['1967', 44550, 119314],
    ['1968', 49556, 135509],
    ['1969', 51489, 153032],
    ['1970', 51035, 171346],
    ['1971', 49968, 188564],
    ['1972', 54389, 209665],
    ['1973', 56250, 237104],
    ['1974', 52429, 235482],
    ['1975', 50007, 242096],
    ['1976', 56507, 252408],
    ['1977', 59953, 270767],
    ['1978', 65357, 289031],
    ['1979', 69419, 295551],
    ['1980', 90049, 309694],
    ['1981', 83117, 317921],
    ['1982', 104674, 315744],
    ['1983', 91705, 329216],
    ['1984', 108740, 353246],
    ['1985', 110698, 379307],
    ['1986', 116356, 398095],
    ['1987', 107606, 417862],
    ['1988', 113802, 444382],
    ['1989', 232261, 472473],
    ['1990', 198986, 489741],
    ['1991', 212955, 499299],
    ['1992', 230779, 501598],
    ['1993', 217028, 521176],
    ['1994', 215563, 544365],
    ['1995', 220211, 571483],
    ['1996', 240343, 586291],
    ['1997', 231308, 597240],
    ['1998', 205485, 639254],
    ['1999', 204114, 638966],
    ['2000', 194952, 668216],
    ['2001', 158038, 684966],
    ['2002', 174327, 718136],
    ['2003', 188473, 741696],
    ['2004', 179462, 745810],
    ['2005', 183175, 767622],
    ['2006', 185564, 778685],
    ['2007', 190489, 788461],
    ['2008', 195232, 771702],
    ['2009', 213642, 766848],
    ['2010', 223518, 788887],
    ['2011', 222956, 768009],
    ['2012', 220020, 752941],
    ['2013', 229666, 757189],
    ['2014', 226863, 771379],
    ['2015', 234192, 803865]
  ]);

  var options = {
    width: 800,
    height: 400, 
    subtitle: 'Energy consumption in Florida exceeds renewable energy production by 2x-3x every year since 1961.',
    series: {
      0:{color: '#108000', visibleInLegend: true },
      1:{color: '#6B6C72', visibleInLegend: true },
    },
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

