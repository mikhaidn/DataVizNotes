i
// svg translate 50, 50
//  rectangeles
//  xAxis
// yAxis

var xs = d3.scaleBand().domain([0,1,2,3,4,5]).range([0,200]);
var ys = d3.scaleLinear().domain([0,42]).range([0,200]);
var ysInv = d3.scaleLinear().domain([0,42]).range([200,0]);
var margin = 50;
var height = 200;

var gee = d3.select("svg").append("g")
    .attr("transform","translate("+margin+","+margin+")")
var rectangles = gee.selectAll("rect").data(data).enter().append("rect")
    .attr("x", function(d,i){return xs(i)})
    .attr("y", function(d){return 200 - ys(d)})
    .attr("width", xs.bandwidth())
    .attr("height",function(d){return ys(d)})

d3.selectAll("svg").append("g")
    .attr("transform","translate("+margin+","+margin+")")
    .call(d3.axisLeft(ysInv))

d3.selectAll("svg").append("g")
    .attr("transform","translate("+margin+","+(height+ margin)+")")
    .call(d3.axisBottom(xs))
                

