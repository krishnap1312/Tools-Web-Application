let hr = min = sec = mils ="0"+ 0, startTimer;
showStopwatch = () =>{
    document.querySelector(".StopWatch").style.display="contents";
}
//Main Clock
clockMain =()=>{
    Mainclock = setInterval(()=>{
        let date = new Date();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
            hour = hour<10? "0"+hour :hour;
            min = min<10? "0" + min :min;
            sec = sec<10? "0"+sec:sec;
            
        document.querySelector(".mhour").innerText = hour;
        document.querySelector(".mlminute").innerText = min;
        document.querySelector(".msecond").innerText = sec;
        document.querySelector(".alhour").innerText = hour;
        document.querySelector(".alminute").innerText = min;
        document.querySelector(".alsecond").innerText = sec;
        
       
    },10)
}
//----------MainClock Close---------------

//Stop Watch
start = () =>{
    startTimer = setInterval(()=>{
        mils++;
        mils = mils<10? "0"+mils:mils;
        if(mils==100){
            sec++;
            sec = sec<10?"0" + sec :sec;
            mils = 0

        }
        if(sec==60){
            min++;
            min = min<10?"0"+min : min;
            sec=00;
        }
        if(min==60){
            min==0;
            hr = hr<10?"0"+hr:hr;
            hr++;
        }
        putvalue();
    },10)
    
}
function stop() {
    clearInterval(startTimer);
  }
  function reset() {
    
    clearInterval(startTimer);
    hr = min = sec = mils = "0" + 0;
    putvalue();
  }

function putvalue(){
    document.querySelector(".sthour").innerText = hr;
    document.querySelector(".stminute").innerText = min; 
    document.querySelector(".stsecond").innerText = sec;
    document.querySelector(".stmillisecond").innerText = mils;
}

//-------StopWatch close--------------

//---------color heading--------------
colorsq = () =>{
    let sett = setInterval(()=>{
        var code = "0123456789ABCDEF", colors="#";
        for(var i =0; i<6;i++){
            colors = colors+code[Math.floor(Math.random()*16)]
        }
        document.querySelector(".Head,.rHead").style.color = colors;
        document.querySelector(".Head,.rhead").style.transition = ".3s ease";
        
        
    },500)
}
//------color Heading close---------------


//alarm
var audio1 = new Audio("chiptune-alarm-clock-112869.mp3");
var audio2 = new Audio("dreamscape-alarm-clock-117680.mp3");
var audio3 = new Audio("oversimplified-alarm-clock-113180.mp3");
var audio4 = new Audio("ringtone-126505.mp3");
var audio5 = new Audio("star-dust-alarm-clock-114194.mp3");

alarm_clocks = () =>{
    document.querySelector(".Alarm_DV").style.visibility = "visible";
    document.querySelector(".Stopwatch_DV").style.visibility = "hidden";

}
showStopwatch = ()=>{
    document.querySelector(".Stopwatch_DV").style.visibility = "visible";
    document.querySelector(".Alarm_DV").style.visibility = "hidden";
}
Alarm = () =>{
    stopAlarm = setInterval(()=>{
        let tone = document.querySelector("#AlarmTone").value;
        let adate = new Date();
        let ahour = adate.getHours();
        let amin = adate.getMinutes();
            let time = document.querySelector("#time").value;
            let arr = time.split(":");
            let alhour = arr[0];
            let almin = arr[1];
            if(ahour==alhour){
                if(almin==amin){
                    switch (tone) {
                        case "chiptune-alarm-clock":
                            audio1.play()
                            break;
                    
                        case "dreamscape-alarm-clock":
                            audio2.play()
                            break;
                    
                        case "oversimplified-alarm-clock":
                            audio3.play()
                            break;
                    
                        case "ringtone":
                            audio4.play()
                            break;
                    
                        case "star-dust-alarm-clock":
                            audio5.play()
                            break;
                    
                        default:
                            break;
                    }
                }
            }},10)
            document.querySelector("#AlarmTone").disabled = true;
            
}
alstop = ()=>{
    document.querySelector("#AlarmTone").disabled = false;
    
    clearInterval(stopAlarm);
    audio1.pause();
    audio1.currentTime =0;
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio5.pause();
   audio5.currentTime = 0;
   clearInterval(stopAlarm);
   
}

//----------alarm close--------------------

