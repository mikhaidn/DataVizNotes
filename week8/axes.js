i
// svg translate 50, 50
//  rectangeles
//  xAxis
// yAxis

var xs = d3.scaleBand().domain([0,1,2,3,4,5]).range([0,200]);
var ys = d3.scaleLinear().domain([0,42]).range([0,200]);
var margin = 50;
var height = 200;

var gee = d3.select("svg").append("g")
    .attr("transform","translate("+margin+","+margin+")")
var rectangles = gee.selectAll("rect").data(data).enter().append("rect")
    .attr("x", function(d,i){return xs(i)})
    .attr("y", function(d){return 200 - ys(d)})
    .attr("width", xs.bandwidth())
    .attr("height",function(d){return ys(d)})

rectangles.select("svg").append("g")
    .attr("transform","translate("+margin+","+margin+")")
    .call(d3.axisLeft(ys))
                

var rectangles = svgGroup.selectAll("rect").data(data).enter().append("rect")
var rectangleAttr = rectangles.attr("x", function(d,i){return xs(i)})
                 .attr("y", function(d){return ys(d)})
                 .attr("width", xs.bandwidth())
                 .attr("height",function(d){return 200 - ys(d)})


                 var gee = d3.selectAll("svg").append("g")
                 .attr("transform","translate("+margin+","+margin+")")
                 .call(d3.axisLeft(ys)).append("g")
                 .attr("transform",
                       "translate("+margin+","+(height + margin)+")")
                 .call(d3.axisBottom(xs));



    path: class = "domain" stroke = "currentColor" d = "M-6,200.5H0.5V0.5H-6"
g: class = "tick" opacity = "1" transform = "translate(0,200.5)"

"M-6,200.5H0.5V0.5H-6"
"M-6,0.5H0.5V200.5H-6"
