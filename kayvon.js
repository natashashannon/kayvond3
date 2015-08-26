window.onload=function(){
	var data = [4, 8, 15, 16, 23, 42];

d3.select("body")
    .style("color", "black")
    .style("background-color", "pink");

    var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);


// simple bar chart http://bost.ocks.org/mike/bar/
d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });

// simple bar chart spelled out step by step
// var chart = d3.select(".chart");
// var bar = chart.selectAll("div");
// var barUpdate = bar.data(data);
// var barEnter = barUpdate.enter().append("div");
// barEnter.style("width", function(d) { return d * 10 + "px"; });
// barEnter.text(function(d) { return d; });




}


