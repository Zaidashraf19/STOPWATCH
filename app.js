const hourscontainer = document.querySelector ("#hour");
const minscontainer = document.querySelector ("#mins");
const secondscontainer = document.querySelector ("#seconds");
let minute = 0;
let seconds = 0;
let hours = 0;
let stopwatch;
function start(){
stopwatch = setInterval(function (){
    seconds +=1;
    if(seconds < 10){
    secondscontainer.innerHTML = "0" + seconds
    }else{
        secondscontainer.innerHTML = seconds
    }
    if(seconds == "60"){
        seconds = 0;
        minute += 1;
        if(minute < 10){
            minscontainer.innerHTML = "0" + minute
        } else {
            minscontainer.innerHTML = minute
        }
    }
    if (minute == "60"){
        minute = 0;
        hours += 1;
        if(hours < 10){
            hourscontainer.innerHTML = "0" + hours
        } else {
            hourscontainer.innerHTML = hours
        }
    }
},
1000)
}


function stop(){
    clearInterval(stopwatch)
}


function restart(){
    clearInterval(stopwatch)
        minute = 0;
        seconds = 0;
        hours = 0;
    secondscontainer.innerHTML = "00";
    minscontainer.innerHTML = "00";
    hourscontainer.innerHTML = "00";
}


