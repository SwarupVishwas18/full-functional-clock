let timeContainer = document.querySelector('.time')

setInterval(function(){
    let dateObj = new Date();
    let sec = dateObj.getSeconds()
    let min = dateObj.getMinutes()
    let hr = dateObj.getHours()
    let year = dateObj.getFullYear()
    let month = dateObj.getMonth()
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
    timeContainer.textContent = `${hr}:${min}:${sec}`
},1000)