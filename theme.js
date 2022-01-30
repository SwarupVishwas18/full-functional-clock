let themeBtn = document.querySelector('#theme-btn');
let body = document.body;
let theme = localStorage.getItem('theme')

if(theme){
        body.classList.remove('light')
        body.classList.add(theme)
}

themeBtn.addEventListener('click', function(){
    if(body.classList.contains('light')){
        body.classList.remove('light')
        body.classList.add('dark')
        localStorage.setItem('theme','dark')
    }else{
        body.classList.remove('dark')
        body.classList.add('light')
        localStorage.setItem('theme','light')
    }
})