//global variables
var timer = 0;
var startButtonClicked = false;
var interval;
var time =  document.getElementById("timer");
var pasttimes = [];
var i = 0;
var count = 0;
//function to start timer when startstop button clicked
function reset(){
    document.getElementById("pasttimes").innerHTML = "";
    pasttimes = [];
    time.innerHTML = 0;
    timer = 0;
    clearInterval(interval);
}
function record(){
    count++;
    document.getElementById("pasttimes").innerHTML += '<br>';
    while(i < count){
    document.getElementById("pasttimes").innerHTML += pasttimes[i];
    i++;
    }
}
function startTimer(){
    if(startButtonClicked == false){
     interval = setInterval(function(){
        timer++;
        time.innerHTML = timer/100;
    }, 10);
    startButtonClicked = true;
}else if(startButtonClicked == true){
    clearInterval(interval);
    time.innerHTML = timer/100;
    pasttimes.push(time.innerHTML);
    startButtonClicked = false;
}
}
