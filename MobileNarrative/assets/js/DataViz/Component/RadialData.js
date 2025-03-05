//Please ignore this file. This was from when I was trying to move my D3s into their own JS files, but couldn't get it to work right. I'm sure there's a way to do it, but 
//this project didn't technically require it, so I didn't want to waste my time trying to solve the problem when I had other more important things to finish first.



/* function drawGraph(colorData) {

    console.log(colorData);

 // set the dimensions and margins of the graph
 var margin = { top: 100, right: 0, bottom: 0, left: 0 },
        width = 690 - margin.left - margin.right,
        height = 690 - margin.top - margin.bottom,
        innerRadius = 90,
        outerRadius = Math.min(width, height) / 2;   // the outerRadius goes from the middle of the SVG area to the border

    // append the svg object
    let svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + (width / 2 + margin.left) + "," + (height / 2 + margin.top) + ")");


var x = d3.scaleBand()
    .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
    .align(0)                  // This does nothing
    .domain(colorData.map(function (d) { return d.Color; })); // The domain of the X axis is the list of states.
var y = d3.scaleRadial()
    .range([innerRadius, outerRadius])   // Domain will be define later.
    .domain([0, 100]); // Domain of Y is from 0 to the max seen in the data
const colors = d3.scaleOrdinal()
    .domain(["Blue", "White", "Green", "Red", "Black"])
    .range(["#004aff", "#ffe647", "#00e206", "#ff0000", "#000000"]);
// Add the bars
var bars = svg.append("g")
    .selectAll("path")
    .data(colorData)
    .enter()
    .append("path")
    .style("fill", d => colors(d.Color))
    .attr("d", d3.arc()     // imagine your doing a part of a donut plot
        .innerRadius(innerRadius)
        .outerRadius(function (d) { return y(d.Percentage); })
        .startAngle(function (d) { return x(d.Color); })
       
        .endAngle(function (d) { return x(d.Color) + x.bandwidth(); })
        .padAngle(0.01)
        .padRadius(innerRadius));


//bars.attr("fill", function(d, i) { return colors[i]; });
// Add the labelsx
svg.append("g")
    .selectAll("g")
    .data(colorData)
    .enter()
    .append("g")
    .attr("text-anchor", function (d) { return (x(d.Color) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start"; })
    .attr("transform", function (d) { return "rotate(" + ((x(d.Color) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")" + "translate(" + (y(d.Percentage) + 10) + ",0)"; })
    .append("text")
    .text(function (d) { return (d.Color) })
    .attr("transform", function (d) { return (x(d.Color) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)"; })
    .style("fill", d => colors(d.Color))
    .style("font-size", "20px")
    .attr("alignment-baseline", "middle")

}

function updateGraph(csvFile) {
    document.getElementById("my_dataviz").innerHTML = "";
    d3.csv(csvFile, colorData => {
    drawGraph(colorData);
});
}


   
    d3.csv("https://raw.githubusercontent.com/zbbevan/260ProjectData/refs/heads/main/ZB_MTGSurveyFavoriteColors.csv", function(colorData) {
        drawGraph(colorData);
    });
 */