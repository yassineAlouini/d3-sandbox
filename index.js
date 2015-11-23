'use strict';


var d3 = require('d3');

//Test if d3.js works
console.log(d3);
let myArray = d3.range(1000).map(x => 2 * x);
var paragraphs = d3.select("body").selectAll("p").style("color", "red");
