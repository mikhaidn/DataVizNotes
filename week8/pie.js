var margin = 150;

var gee = d3.select("svg").append("g")
    .attr("transform","translate("+margin+","+margin+")")
var pie = gee. selectAll("path").data(pie(data))
    .enter().append("path")
    .attr("d",arc)
    .attr("fill",function(d,i){return color[i]})
