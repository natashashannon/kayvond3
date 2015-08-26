window.onload=function(){
	var data = [4, 8, 15, 16, 23, 42];

d3.select("body")
    .style("color", "black")
    .style("background-color", "pink");

    var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);


// simple bar chart http://bost.ocks.org/mike/bar/2/
d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });


}


