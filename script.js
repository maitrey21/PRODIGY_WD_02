var ms = 0, s = 0, m = 0, h = 0
var time;
var display=document.querySelector('.time')
var laps=document.querySelector('.laps')
function start(){
    if(!time){
        time= setInterval(run,10)
    }
}
function run(){
    display.innerHTML=getTime()
    ms++
    if(ms==100){
        ms=0;
        s++;
    }
    if(s==60){
        s=0;
        m++;
    }
    if(m==60){
        m=0;
        h++;
    }
        

}
function getTime(){
    return(h<10 ? "0"+h:h)+":"+(m<10 ? "0"+m:m)+":"+(s<10 ? "0"+s:s)+":"+(ms<10 ? "0"+ms:ms);
}
function pause(){
    stopTime()
}
function stopTime(){
    clearInterval(time)
    time=false
}
function reset(){
    stopTime()
    ms=0;
    s=0;
    m=0;
    h=0;
    display.innerHTML=getTime()
}
function lap(){
    if(time){
        var li=document.createElement("li")
        li.innerHTML=getTime()
        laps.appendChild(li)
    }
}
function resetlap(){
    laps.innerHTML=""
}
