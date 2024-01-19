var mean;
var median;
var mode;
var totalRolls;
var Sum=0;
var dNumber;
var Results = [];
var nDoubles=0;
var nTriples=0;


function numDice(num){
     dNumber = num
     document.getElementById("dNum").innerHTML = "Number of Dice to Roll: " + num;
}


function dRoll(){
    r=0;
if (dNumber ===1){
    r = Math.floor(Math.random()*6)+1
    Results.push(r);
}
if(dNumber===2){
    x = Math.floor(Math.random()*6)+1
    y = Math.floor(Math.random()*6)+1
    r=x+y;
    if(x===y){
        nDoubles++;
    }
    Results.push(r);
}
if(dNumber===3){
    x = Math.floor(Math.random()*6)+1
    y = Math.floor(Math.random()*6)+1
    z = Math.floor(Math.random()*6)+1
    r=x+y+z;
    if(x===y && y===z){
        nTriples++;
    } else if(x===y || x===z || y==z){
        nDoubles++;
    }
    Results.push(r);
}
console.log(r)
cMean();
cMode();
cMedian();
fDoubles();
fTriples();
f1();
f2();
f3();
f4();
f5();
f6();
f7();
f8();
f9();
f10();
f11();
f12();
f13();
f14();
f15();
f16();
f17();
f18();
}


//for preventDefault() https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
// for isNaN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
function form(event) {
    event.preventDefault();
    var numRolls = parseInt(document.getElementById("numRolls").value, 10);
    if (!isNaN(numRolls) && numRolls > 0) {
        rNum(numRolls);
        getResults();
    } else {
        alert("Please enter a valid positive integer for the number of rolls.");
    }
}


function getResults(){
    let text = document.getElementById("list");
    text.innerHTML = "";
    if (Results.length > 0) {
        for (let i = 0; i < Results.length; i++) {
            var resultItem = document.createElement("p");
            resultItem.textContent = "Roll " + (i + 1) + ": " + Results[i];
            text.appendChild(resultItem);
        }
    } else {
        text.textContent = "No results available.";
    }
}




function rNum(x){
    Results=[];
    for (i=0; i<x+1;i++){
        dRoll();
    }
    getResults()
    nDoubles=0;
    nTriples=0;
}


function tSum(){
    Sum=0
   for (i =0; i<Results.length;i++){
    Sum+=Results[i]
   }
}


function cMean(){
    tSum()
    mean = Math.floor((Sum)/Results.length);
    document.getElementById("Mean").innerHTML= "Mean: "+ mean;
}


//sorts the array here https://www.w3schools.com/js/js_array_sort.asp
function cMedian(){
    SortArr=Results.slice()
    SortArr.sort(function(a, b){return a - b})
    half = Math.floor(SortArr.length/2)
    median = SortArr[half]
    document.getElementById("Median").innerHTML= "Median: "+ median;
}


// got most common element from here https://www.geeksforgeeks.org/javascript-program-to-find-the-most-frequent-element-in-an-array/
function cMode(){
    let Mo = new Map();
 
    for (const i in Results) {
        if (!Mo.get(Results[i])) Mo.set(Results[i], 1);
        else {
            Mo.set(Results[i], Mo.get(Results[i]) + 1);
        }
    }
    let max = 0;
    let num;
    Mo.forEach((val, key, map) => {
        if (max < val) {
            max = val;
            num = key;
        }
    });
    mode = num;
    document.getElementById("Mode").innerHTML= "Mode: "+mode;
}


function fDoubles(){
    document.getElementById("fDoubles").innerHTML="Number of Doubles: "+ nDoubles;
}


function fTriples(){
    document.getElementById("fTripless").innerHTML="Number of Triples: " + nTriples;
}


function f1(){
    one = Results.filter(x=>x===1);
    frequency = Math.floor((one.length)/(Results.length) * 100) + "%"
    document.getElementById("f1").innerHTML= "Frequency of 1: " + frequency
}


function f2(){
    two =  Results.filter(x=>x===2);
    frequency = Math.floor((two.length)/(Results.length) * 100) + "%"
    document.getElementById("f2").innerHTML="Frequency of 2: " + frequency
}


function f3(){
    three =  Results.filter(x=>x===3);
    frequency = Math.floor((three.length)/(Results.length) * 100) + "%"
    document.getElementById("f3").innerHTML="Frequency of 3: " + frequency
}


function f4(){
    four =  Results.filter(x=>x===4);
    frequency = Math.floor((four.length)/(Results.length) * 100) + "%"
    document.getElementById("f4").innerHTML="Frequency of 4: " + frequency
}


function f5(){
    five =  Results.filter(x=>x===5);
    frequency = Math.floor((five.length)/(Results.length) * 100) + "%"
    document.getElementById("f5").innerHTML="Frequency of 5: " + frequency
}


function f6(){
    six =  Results.filter(x=>x===6);
    frequency = Math.floor((six.length)/(Results.length) * 100) + "%"
    document.getElementById("f6").innerHTML="Frequency of 6: " + frequency
}


function f7(){
    seven =  Results.filter(x=>x===7);
    frequency = Math.floor((seven.length)/(Results.length) * 100) + "%"
    document.getElementById("f7").innerHTML="Frequency of 7: " + frequency
}


function f8(){
    eight =  Results.filter(x=>x===8);
    frequency = Math.floor((eight.length)/(Results.length) * 100) + "%"
    document.getElementById("f8").innerHTML="Frequency of 8: " + frequency
}
function f9(){
    nine =  Results.filter(x=>x===9);
    frequency = Math.floor((nine.length)/(Results.length) * 100) + "%"
    document.getElementById("f9").innerHTML="Frequency of 9: " + frequency
}


function f10(){
    ten =  Results.filter(x=>x===10);
    frequency = Math.floor((ten.length)/(Results.length) * 100) + "%"
    document.getElementById("f10").innerHTML="Frequency of 10: " + frequency
}


function f11(){
    eleven =  Results.filter(x=>x===11);
    frequency = Math.floor((eleven.length)/(Results.length) * 100) + "%"
    document.getElementById("f11").innerHTML="Frequency of 11: " + frequency
}


function f12(){
    twelve =  Results.filter(x=>x===12);
    frequency = Math.floor((twelve.length)/(Results.length) * 100) + "%"
    document.getElementById("f12").innerHTML="Frequency of 12: " + frequency
}


function f13(){
    thirteen =  Results.filter(x=>x===13);
    frequency = Math.floor((thirteen.length)/(Results.length) * 100) + "%"
    document.getElementById("f13").innerHTML="Frequency of 13: " + frequency
}


function f14(){
    fourteen =  Results.filter(x=>x===14);
    frequency = Math.floor((fourteen.length)/(Results.length) * 100) + "%"
    document.getElementById("f14").innerHTML="Frequency of 14: " + frequency
}


function f15(){
    fifteen =  Results.filter(x=>x===15);
    frequency = Math.floor((fifteen.length)/(Results.length) * 100) + "%"
    document.getElementById("f15").innerHTML="Frequency of 15: " + frequency
}


function f16(){
    sixteen=  Results.filter(x=>x===16);
    frequency = Math.floor((sixteen.length)/(Results.length) * 100) + "%"
    document.getElementById("f16").innerHTML="Frequency of 16: " + frequency
}




function f17(){
    seventeen=  Results.filter(x=>x===17);
    frequency = Math.floor((seventeen.length)/(Results.length) * 100) + "%"
    document.getElementById("f17").innerHTML="Frequency of 17: " + frequency
}


function f18(){
    eighteen=  Results.filter(x=>x===18);
    frequency = Math.floor((eighteen.length)/(Results.length) * 100) + "%"
    document.getElementById("f18").innerHTML="Frequency of 18: " + frequency
}


