let timeContainer = document.querySelector('.time')
let dateContainer = document.querySelector('.date')
setInterval(function(){
    let dateObj = new Date();
    let sec = dateObj.getSeconds()
    let min = dateObj.getMinutes()
    let hr = dateObj.getHours()
    let year = dateObj.getFullYear()
    let month = dateObj.getMonth()+1
    let date = dateObj.getDate()

    if(min<10){
        min= "0"+min;
    }
    if(sec<10){
        sec= "0"+sec;
    }
    if(hr<10){
        hr= "0"+hr;
    }
    if(date<10){
        date= "0"+date;
    }
    if(month<10){
        month= "0"+month;
    }
    timeContainer.textContent = `${hr}:${min}:${sec}`
    dateContainer.textContent = `${date}-${month}-${year}`
},1000)