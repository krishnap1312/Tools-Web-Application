
//Main Clock
clockMain =()=>{
    Mainclock = setInterval(()=>{
        let date = new Date();
        let shour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
            shour = shour<10? "0"+shour : shour;
            min = min<10? "0" + min :min;
            sec = sec<10? "0"+sec:sec;
            
        document.querySelector(".mhour").innerHTML = shour;
        document.querySelector(".mlminute").innerText = min;
        document.querySelector(".msecond").innerText = sec;

        
       
    },10)
}
//----------MainClock Close---------------

//---------color heading--------------
colorsq = () =>{
    let sett = setInterval(()=>{
        var code = "0123456789ABCDEF", colors="#";
        for(var i =0; i<6;i++){
            colors = colors+code[Math.floor(Math.random()*16)]
        }
        document.querySelector(".rHead").style.color = colors;
        
        
    },500)
}
//------color Heading close---------------


// Countdown----------
showcountDown = () =>{
    document.querySelector(".Countdown-div").style.visibility = "visible"
}
Countdown = () =>{
    let num = number = document.getElementById("nums").value;
    count = setInterval(()=>{
        if(num==0){
            alert("Insert Number");
            document.querySelector(".StartCount").disabled = false;

        }
        if(num>=0){
            document.querySelector(".Count").innerText = number;
            number--;
            num--;
        }
       
        if(num==0){
            document.querySelector(".StartCount").disabled = false;
            }
    },1000)
    document.querySelector(".StartCount").disabled = true;
    
}


CountDownReset = () =>{
    number =0;
    clearInterval(count);
    countdownput();
} 
countdownput = () =>{
    document.querySelector(".Count").innerText = number;
    document.querySelector("#nums").value = number;
    document.querySelector(".StartCount").disabled = false;


}