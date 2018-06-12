/* Vue app for navigation and hero components */

var app = new Vue({
  el: '#app',
  data: {  }
})

/* Vue app for footer component */

var footerApp = new Vue({
  el: '#footer-app',
  data: {  }
})


/* Chart for index.html with energy consumed and produced from 1960-2015*/

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(getProducedData);
google.charts.setOnLoadCallback(getElectricConsumed);


function drawChart(freshData) {
  console.log("freshData", freshData)
  freshData.unshift(["Year", "Billion BTUs"])
  
  var data = google.visualization.arrayToDataTable(freshData);
  
  var options = {
    height: '450',
    width: '850',
    series: {
      0:{color: '#108000'}
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

function getProducedData(){
  // Create a new request object
  let request = new XMLHttpRequest()
  
  // URL to data goes here
  //TO DO: secure key
  let requestUrl = "https://api.eia.gov/series/?api_key=f4d8118ecdf14870ca176c9bd8b25d34&series_id=SEDS.REPRB.FL.A"
  
  // Open a connection
  request.open('GET', requestUrl, true)
  
  // Callback for when the request completes
  request.onload = function(){
    let theActualData = JSON.parse(request.response).series[0].data
    drawChart(theActualData)
  }
  
  // Callback for when there's an error
  request.error = function(err){
    console.log("error is: ", err)
  }
  
  // Send the request to the specified URL
  request.send()  
}

function drawChart2(newData) {
  console.log("newData", newData)
  newData.unshift(["Year", "Billion BTUs"])
  
  var data = google.visualization.arrayToDataTable(newData);
  
  var options = {
    height: '450',
    width: '850',
    series: {
      0:{color: '#6B6C72'}
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material2'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

function getElectricConsumed(){
  // Create a new request object
  let request = new XMLHttpRequest()
  
  //URL to data goes here
  //TO DO: secure key
  let requestUrl = "http://api.eia.gov/series/?api_key=f4d8118ecdf14870ca176c9bd8b25d34&series_id=SEDS.ESTCB.FL.A"
  
  //Open a connection
  request.open('GET', requestUrl, true)
  
  //Callback for when there's an error
  request.onload = function(){
    let theRealData = JSON.parse(request.response).series[0].data
    drawChart2(theRealData)
  }
  
  //Callback for when there's an error
  request.error = function(err){
    console.log("error is: ", err)
  }
  
  //Send the request to the specified URL
  request.send()
}

