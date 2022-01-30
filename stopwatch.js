let startBtn = document.querySelector('#start-btn')
let stopBtn = document.querySelector('#stop-btn')

let timeContain = document.querySelector('.time-container')

let timer = null

function startStopWatch(){
    let sec = 0
    let min = 0
    let hr = 0
    timer = setInterval(function(){
        sec++
    if(sec==60){
        min++
        if(min==60){
            hr++
            min=0
        }
        sec = 0
    }

    let text_sec = sec
    let text_hr = hr
    let text_min = min

    if(sec<10){
        text_sec = "0"+sec
    }
    if(min<10){
        text_min = "0"+min
    }
    if(hr<10){
        text_hr = "0"+hr
    }

    timeContain.textContent = text_hr + ":" + text_min + ":" + text_sec
   }, 1000)
   startBtn.disabled = true;
   stopBtn.disabled = false
}

function stopStopWatch(){
    clearInterval(timer)
    startBtn.disabled = false
    stopBtn.disabled = true
}